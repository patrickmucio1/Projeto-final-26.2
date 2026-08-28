import { FormEvent, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardIcon, CalendarIcon, LockIcon, UserIcon } from "../components/CheckoutIcons";
import { CheckoutOrderSummary } from "../components/CheckoutOrderSummary";
import { CheckoutShell } from "../components/CheckoutShell";
import { PaymentData, useCheckout } from "../context/CheckoutContext";

type PaymentField = "cardNumber" | "expiry" | "cvv" | "nameOnCard";
type PaymentErrors = Partial<Record<PaymentField, string>>;
type PaymentTouched = Partial<Record<PaymentField, boolean>>;

function validateField(field: PaymentField, value: string) {
  const trimmed = value.trim();

  if (!trimmed) return "This field is required.";

  if (field === "cardNumber") {
    const digits = trimmed.replace(/\D/g, "");
    if (digits.length !== 16) return "Enter a valid 16-digit card number.";
  }

  if (field === "expiry") {
    const match = trimmed.match(/^(\d{2})\/(\d{2})$/);
    if (!match || Number(match[1]) < 1 || Number(match[1]) > 12) {
      return "Use the format MM/YY.";
    }
  }

  if (field === "cvv" && !/^\d{3,4}$/.test(trimmed)) {
    return "Enter a valid 3 or 4 digit CVV.";
  }

  if (field === "nameOnCard" && trimmed.length < 2) {
    return "Enter the name shown on the card.";
  }

  return "";
}

export function CheckoutPaymentPage() {
  const { payment, setPayment } = useCheckout();
  const [form, setForm] = useState<PaymentData>(payment);
  const [errors, setErrors] = useState<PaymentErrors>({});
  const [touched, setTouched] = useState<PaymentTouched>({});
  const navigate = useNavigate();

  const update = (field: keyof PaymentData, value: string | boolean) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (typeof value === "string" && touched[field as PaymentField]) {
      const message = validateField(field as PaymentField, value);
      setErrors((current) => ({ ...current, [field]: message }));
    }
  };

  const blur = (field: PaymentField) => {
    setTouched((current) => ({ ...current, [field]: true }));
    setErrors((current) => ({ ...current, [field]: validateField(field, String(form[field])) }));
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const fields: PaymentField[] = ["cardNumber", "expiry", "cvv", "nameOnCard"];
    const nextErrors: PaymentErrors = {};
    const nextTouched: PaymentTouched = {};

    fields.forEach((field) => {
      nextTouched[field] = true;
      const message = validateField(field, String(form[field]));
      if (message) nextErrors[field] = message;
    });

    setTouched(nextTouched);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setPayment(form);
    navigate("/checkout/review");
  };

  return (
    <CheckoutShell step={2}>
      <div className="mt-11 grid gap-7 md:mt-12 md:grid-cols-[minmax(0,1fr)_390px] md:items-start md:gap-8">
        <form onSubmit={submit} noValidate autoComplete="off" data-form-type="other" className="rounded-[12px] border border-[#D1D5DB] bg-white p-5 md:p-7">
          <h2 className="flex items-center gap-3 text-[24px] font-semibold md:text-[23px]"><CardIcon className="h-6 w-6" /> Payment Information</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-5">
            <div className="md:col-span-2">
              <IconField label="Card Number *" placeholder="1234 5678 9012 3456" value={form.cardNumber} onChange={(value) => update("cardNumber", value)} onBlur={() => blur("cardNumber")} icon={<CardIcon className="h-5 w-5" />} error={errors.cardNumber} inputMode="numeric" />
            </div>
            <IconField label="Expiry Date *" placeholder="MM/YY" value={form.expiry} onChange={(value) => update("expiry", value)} onBlur={() => blur("expiry")} icon={<CalendarIcon className="h-5 w-5" />} error={errors.expiry} inputMode="numeric" />
            <IconField label="CVV *" placeholder="123" value={form.cvv} onChange={(value) => update("cvv", value)} onBlur={() => blur("cvv")} icon={<LockIcon className="h-5 w-5" />} error={errors.cvv} inputMode="numeric" />
            <div className="md:col-span-2">
              <IconField label="Name on Card *" placeholder="" value={form.nameOnCard} onChange={(value) => update("nameOnCard", value)} onBlur={() => blur("nameOnCard")} icon={<UserIcon className="h-5 w-5" />} error={errors.nameOnCard} />
            </div>
          </div>

          <fieldset className="mt-8">
            <legend className="text-[18px] font-semibold md:text-[16px]">Billing Address</legend>
            <label className="mt-4 flex cursor-pointer items-center gap-3 text-[14px] font-medium md:text-[13px]">
              <input type="radio" name="billing" checked={form.billingSame} onChange={() => update("billingSame", true)} className="h-4 w-4 accent-[#030711]" />
              Same as shipping address
            </label>
            <label className="mt-2 flex cursor-pointer items-center gap-3 text-[14px] font-medium md:text-[13px]">
              <input type="radio" name="billing" checked={!form.billingSame} onChange={() => update("billingSame", false)} className="h-4 w-4 accent-[#030711]" />
              Use a different billing address
            </label>
          </fieldset>

          <div className="mt-8 flex min-h-[76px] items-center justify-center gap-3 rounded-[10px] bg-[#F8F8F8] px-5 text-center text-[14px] font-semibold text-[#16A34A] md:min-h-[58px] md:text-[12px]">
            <LockIcon className="h-5 w-5 shrink-0" />
            <span>Your payment information is encrypted and secure</span>
          </div>

          <button type="submit" className="mt-7 h-[50px] w-full rounded-[8px] bg-[#030711] text-[14px] font-medium text-white md:h-[46px] md:text-[12px]">Review Order</button>
        </form>
        <CheckoutOrderSummary />
      </div>
    </CheckoutShell>
  );
}

type IconFieldProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  icon: ReactNode;
  error?: string;
  inputMode?: "text" | "numeric";
};

function IconField({ label, placeholder, value, onChange, onBlur, icon, error, inputMode = "text" }: IconFieldProps) {
  return (
    <label className="block">
      <span className={`mb-2 block text-[13px] font-semibold md:text-[12px] ${error ? "text-[#DC2626]" : ""}`}>{label}</span>
      <span className={`flex h-[54px] items-center rounded-[9px] border px-4 transition-colors md:h-[45px] ${error ? "border-[#DC2626] ring-1 ring-[#DC2626]/20" : "border-[#D1D5DB] focus-within:border-[#030711]"}`}>
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          inputMode={inputMode}
          autoComplete="off"
          aria-invalid={Boolean(error)}
          data-form-type="other"
          className="min-w-0 flex-1 bg-transparent text-[16px] outline-none placeholder:text-[#7B8494] md:text-[12px]"
        />
        <span className={error ? "text-[#DC2626]" : "text-[#7B8494]"}>{icon}</span>
      </span>
      {error && <span className="mt-1.5 block text-[11px] font-medium text-[#DC2626]">{error}</span>}
    </label>
  );
}
