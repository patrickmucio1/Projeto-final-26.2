import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckoutOrderSummary } from "../components/CheckoutOrderSummary";
import { CheckoutShell } from "../components/CheckoutShell";
import { LocationIcon } from "../components/CheckoutIcons";
import { ShippingData, ShippingMethod, useCheckout } from "../context/CheckoutContext";

const methods: { id: ShippingMethod; title: string; detail: string; price: string }[] = [
  { id: "standard", title: "Standard Shipping", detail: "5-7 business days", price: "Free" },
  { id: "express", title: "Express Shipping", detail: "2-3 business days", price: "$9.99" },
  { id: "overnight", title: "Overnight Shipping", detail: "Next business day", price: "$24.99" },
];

type ShippingField = "firstName" | "lastName" | "email" | "phone" | "address" | "city" | "state" | "zip";
type ShippingErrors = Partial<Record<ShippingField, string>>;
type ShippingTouched = Partial<Record<ShippingField, boolean>>;

function validateField(field: ShippingField, value: string) {
  const trimmed = value.trim();

  if (["firstName", "lastName", "email", "address", "city", "state", "zip"].includes(field) && !trimmed) {
    return "This field is required.";
  }

  if (field === "email" && trimmed && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return "Enter a valid email address.";
  }

  if (field === "phone" && trimmed) {
    const digits = trimmed.replace(/\D/g, "");
    if (digits.length < 8 || digits.length > 15) {
      return "Enter a valid phone number.";
    }
  }

  if (field === "zip" && trimmed && !/^[A-Za-z0-9 -]{4,12}$/.test(trimmed)) {
    return "Enter a valid ZIP code.";
  }

  return "";
}

export function CheckoutShippingPage() {
  const { shipping, setShipping } = useCheckout();
  const [form, setForm] = useState<ShippingData>(shipping);
  const [errors, setErrors] = useState<ShippingErrors>({});
  const [touched, setTouched] = useState<ShippingTouched>({});
  const navigate = useNavigate();

  const update = (field: keyof ShippingData, value: string | boolean) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (typeof value === "string" && touched[field as ShippingField]) {
      const message = validateField(field as ShippingField, value);
      setErrors((current) => ({ ...current, [field]: message }));
    }
  };

  const blur = (field: ShippingField) => {
    setTouched((current) => ({ ...current, [field]: true }));
    setErrors((current) => ({ ...current, [field]: validateField(field, String(form[field])) }));
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const fields: ShippingField[] = ["firstName", "lastName", "email", "phone", "address", "city", "state", "zip"];
    const nextErrors: ShippingErrors = {};
    const nextTouched: ShippingTouched = {};

    fields.forEach((field) => {
      nextTouched[field] = true;
      const message = validateField(field, String(form[field]));
      if (message) nextErrors[field] = message;
    });

    setTouched(nextTouched);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setShipping(form);
    navigate("/checkout/payment");
  };

  return (
    <CheckoutShell step={1}>
      <div className="mt-11 grid gap-7 md:mt-12 md:grid-cols-[minmax(0,1fr)_390px] md:items-start md:gap-8">
        <form onSubmit={submit} noValidate className="rounded-[12px] border border-[#D1D5DB] bg-white p-5 md:p-7">
          <h2 className="flex items-center gap-3 text-[24px] font-semibold md:text-[23px]"><LocationIcon className="h-6 w-6" /> Shipping Information</h2>

          <div className="mt-7 grid gap-5 md:grid-cols-2 md:gap-x-4 md:gap-y-6">
            <Field label="First Name *" value={form.firstName} onChange={(value) => update("firstName", value)} onBlur={() => blur("firstName")} error={errors.firstName} />
            <Field label="Last Name *" value={form.lastName} onChange={(value) => update("lastName", value)} onBlur={() => blur("lastName")} error={errors.lastName} />
            <div className="md:col-span-2"><Field label="Email Address *" value={form.email} type="email" onChange={(value) => update("email", value)} onBlur={() => blur("email")} error={errors.email} /></div>
            <div className="md:col-span-2"><Field label="Phone Number" value={form.phone} type="tel" onChange={(value) => update("phone", value)} onBlur={() => blur("phone")} error={errors.phone} /></div>
            <div className="md:col-span-2"><Field label="Address *" value={form.address} onChange={(value) => update("address", value)} onBlur={() => blur("address")} error={errors.address} /></div>
            <div className="md:col-span-2"><Field label="Apartment, suite, etc. (optional)" value={form.apartment} onChange={(value) => update("apartment", value)} /></div>
            <Field label="City *" value={form.city} onChange={(value) => update("city", value)} onBlur={() => blur("city")} error={errors.city} />
            <div>
              <label className={`mb-2 block text-[13px] font-semibold md:text-[12px] ${errors.state ? "text-[#DC2626]" : ""}`}>State *</label>
              <select
                value={form.state}
                onChange={(event) => update("state", event.target.value)}
                onBlur={() => blur("state")}
                aria-invalid={Boolean(errors.state)}
                className={`h-[49px] w-full rounded-[8px] border bg-white px-3 text-[13px] outline-none transition-colors md:h-[45px] md:text-[12px] ${errors.state ? "border-[#DC2626] ring-1 ring-[#DC2626]/20" : "border-[#D1D5DB] focus:border-[#030711]"}`}
              >
                <option value="">Select state</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="SP">São Paulo</option>
                <option value="MG">Minas Gerais</option>
                <option value="TX">Texas</option>
                <option value="NY">New York</option>
              </select>
              {errors.state && <p className="mt-1.5 text-[11px] font-medium text-[#DC2626]">{errors.state}</p>}
            </div>
            <Field label="ZIP Code *" value={form.zip} onChange={(value) => update("zip", value)} onBlur={() => blur("zip")} error={errors.zip} />
          </div>

          <fieldset className="mt-7">
            <legend className="text-[17px] font-semibold md:text-[15px]">Shipping Method</legend>
            <div className="mt-4 space-y-2.5">
              {methods.map((method) => (
                <label key={method.id} className="flex min-h-[72px] cursor-pointer items-center justify-between rounded-[10px] border border-[#D1D5DB] px-4 py-3 md:min-h-[66px]">
                  <span className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping-method"
                      checked={form.shippingMethod === method.id}
                      onChange={() => update("shippingMethod", method.id)}
                      className="h-4 w-4 accent-[#030711]"
                    />
                    <span>
                      <span className="block text-[14px] font-semibold md:text-[13px]">{method.title}</span>
                      <span className="block text-[12px] text-[#7B8494] md:text-[11px]">{method.detail}</span>
                    </span>
                  </span>
                  <strong className="text-[14px] md:text-[13px]">{method.price}</strong>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="mt-6 flex cursor-pointer items-center gap-3 text-[13px] font-medium md:text-[12px]">
            <input type="checkbox" checked={form.saveInfo} onChange={(event) => update("saveInfo", event.target.checked)} className="h-4 w-4 accent-[#030711]" />
            Save this information for next time
          </label>

          <button type="submit" className="mt-6 h-[48px] w-full rounded-[8px] bg-[#030711] text-[13px] font-medium text-white md:h-[46px] md:text-[12px]">
            Continue to Payment
          </button>
        </form>
        <CheckoutOrderSummary />
      </div>
    </CheckoutShell>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  type?: string;
  error?: string;
};

function Field({ label, value, onChange, onBlur, type = "text", error }: FieldProps) {
  return (
    <label className="block">
      <span className={`mb-2 block text-[13px] font-semibold md:text-[12px] ${error ? "text-[#DC2626]" : ""}`}>{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        className={`h-[49px] w-full rounded-[8px] border px-3 text-[13px] outline-none transition-colors md:h-[45px] md:text-[12px] ${error ? "border-[#DC2626] ring-1 ring-[#DC2626]/20" : "border-[#D1D5DB] focus:border-[#030711]"}`}
      />
      {error && <span className="mt-1.5 block text-[11px] font-medium text-[#DC2626]">{error}</span>}
    </label>
  );
}
