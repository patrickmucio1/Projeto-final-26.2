import { CardIcon, CheckIcon, LocationIcon } from "./CheckoutIcons";

type CheckoutStepsProps = {
  step: 1 | 2 | 3;
};

const steps = [
  { label: "Shipping", icon: LocationIcon },
  { label: "Payment", icon: CardIcon },
  { label: "Review", icon: CheckIcon },
];

export function CheckoutSteps({ step }: CheckoutStepsProps) {
  return (
    <div className="mx-auto mt-9 flex w-full max-w-[460px] items-start justify-center md:mt-8">
      {steps.map((item, index) => {
        const number = index + 1;
        const complete = number < step;
        const active = number === step;
        const Icon = complete ? CheckIcon : item.icon;
        return (
          <div key={item.label} className="contents">
            <div className="flex w-[94px] flex-col items-center text-center md:w-[110px]">
              <div
                className={`grid h-[52px] w-[52px] place-items-center rounded-full border-2 md:h-12 md:w-12 ${
                  complete
                    ? "border-[#030711] bg-[#030711] text-white"
                    : active
                      ? "border-[#030711] bg-white text-[#030711]"
                      : "border-[#D1D5DB] bg-white text-[#7B8494]"
                }`}
              >
                <Icon className="h-7 w-7 md:h-6 md:w-6" />
              </div>
              <span className={`mt-2 text-[15px] font-semibold md:text-[12px] ${active || complete ? "text-[#030711]" : "text-[#7B8494]"}`}>
                {item.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`mt-[25px] h-[2px] w-[76px] md:mt-6 md:w-[65px] ${number < step ? "bg-[#030711]" : "bg-[#D1D5DB]"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
