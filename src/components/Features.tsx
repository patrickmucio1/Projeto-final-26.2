import { features } from "../data/storeData";

export function Features() {
  return (
    <section aria-label="Store benefits" className="border-y border-[#F3F4F6] bg-white py-[70px] md:py-[78px]">
      <div className="mx-auto grid max-w-[1376px] gap-[56px] px-5 md:grid-cols-3 md:gap-12 md:px-8">
        {features.map((feature) => (
          <article key={feature.title} className="text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#E5E7EB] md:h-16 md:w-16">
              <img src={feature.icon} alt="" className="h-6 w-6 md:h-8 md:w-8" />
            </div>
            <h3 className="mt-4 text-[14px] font-semibold md:mt-5 md:text-[15px]">{feature.title}</h3>
            <p className="mt-2 text-[12px] text-[#6B7280] md:mt-3 md:text-[13px]">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
