import { Link, useNavigate } from "react-router-dom";
import { LockIcon } from "../components/CheckoutIcons";
import { CheckoutOrderSummary } from "../components/CheckoutOrderSummary";
import { CheckoutShell } from "../components/CheckoutShell";
import { useCheckout } from "../context/CheckoutContext";

function paymentEnding(cardNumber: string) {
  const digits = cardNumber.replace(/\D/g, "");
  return digits.slice(-4) || "4242";
}

export function CheckoutReviewPage() {
  const { shipping, payment } = useCheckout();
  const navigate = useNavigate();
  const fullName = `${shipping.firstName} ${shipping.lastName}`.trim() || "John Doe";
  const addressLine = shipping.address || "123 Main Street";
  const apartment = shipping.apartment || "Apt 4B";
  const cityLine = [shipping.city || "New York", shipping.state || "NY", shipping.zip || "10001"].filter(Boolean).join(", ");
  const email = shipping.email || "john.doe@example.com";
  const methodLabel = shipping.shippingMethod === "express" ? "Express Shipping - 2-3 business days" : shipping.shippingMethod === "overnight" ? "Overnight Shipping - Next business day" : "Standard Shipping - 5-7 business days";

  return (
    <CheckoutShell step={3}>
      <div className="mt-11 grid gap-7 md:mt-12 md:grid-cols-[minmax(0,1fr)_390px] md:items-start md:gap-8">
        <div>
          <section className="rounded-[12px] border border-[#D1D5DB] bg-white p-6 md:p-7">
            <h2 className="text-[27px] font-semibold md:text-[23px]">Review Your Order</h2>

            <div className="mt-8 border-b border-[#D1D5DB] pb-7">
              <div className="flex items-center justify-between">
                <h3 className="text-[18px] font-semibold md:text-[16px]">Shipping Address</h3>
                <Link to="/checkout/shipping" className="text-[14px] font-semibold md:text-[12px]">Edit</Link>
              </div>
              <div className="mt-5 text-[15px] leading-[1.55] text-[#7B8494] md:text-[12px]">
                <p>{fullName}</p>
                <p>{addressLine}</p>
                {apartment && <p>{apartment}</p>}
                <p>{cityLine}</p>
                <p>{email}</p>
              </div>
            </div>

            <div className="border-b border-[#D1D5DB] py-7">
              <div className="flex items-center justify-between">
                <h3 className="text-[18px] font-semibold md:text-[16px]">Payment Method</h3>
                <Link to="/checkout/payment" className="text-[14px] font-semibold md:text-[12px]">Edit</Link>
              </div>
              <div className="mt-5 text-[15px] leading-[1.6] text-[#7B8494] md:text-[12px]">
                <p>**** **** **** {paymentEnding(payment.cardNumber)}</p>
                <p>{payment.expiry || "04/32"}</p>
              </div>
            </div>

            <div className="pt-7">
              <h3 className="text-[18px] font-semibold md:text-[16px]">Shipping Method</h3>
              <p className="mt-4 text-[15px] text-[#7B8494] md:text-[12px]">{methodLabel}</p>
            </div>
          </section>

          <button onClick={() => navigate("/order-confirmed")} type="button" className="mt-6 flex h-[54px] w-full items-center justify-center gap-3 rounded-[8px] bg-[#030711] text-[15px] font-medium text-white md:h-[48px] md:text-[12px]">
            <LockIcon className="h-5 w-5" /> Place Order - $147.96
          </button>
        </div>
        <CheckoutOrderSummary />
      </div>
    </CheckoutShell>
  );
}
