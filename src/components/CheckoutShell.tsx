import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { ArrowLeftIcon } from "./CheckoutIcons";
import { CheckoutSteps } from "./CheckoutSteps";

type CheckoutShellProps = {
  step: 1 | 2 | 3;
  children: ReactNode;
};

export function CheckoutShell({ step, children }: CheckoutShellProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto w-full max-w-[1420px] px-4 pb-16 pt-7 md:px-8 md:pt-10">
        <div className="flex items-center gap-5">
          <Link to={step === 1 ? "/cart" : step === 2 ? "/checkout/shipping" : "/checkout/payment"} className="grid h-8 w-8 place-items-center" aria-label="Back">
            <ArrowLeftIcon className="h-5 w-5 md:h-4 md:w-4" />
          </Link>
          <h1 className="text-[31px] font-bold leading-tight md:text-[35px]">Checkout</h1>
        </div>
        <CheckoutSteps step={step} />
        {children}
      </main>
    </div>
  );
}
