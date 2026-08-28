import arrowIcon from "../assets/Component 2.svg";
import bannerImage from "../assets/banner-fundo.png";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[610px] items-center justify-center overflow-hidden bg-[#FCFCFC] px-5 md:h-[840px] md:bg-transparent"
    >
      <img
        src={bannerImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 hidden h-full w-full object-cover object-center md:block"
      />

      <div className="relative z-10 w-full max-w-[800px] text-center">
        <h1 className="text-[40px] font-bold leading-[1.05] tracking-[-0.035em] text-[#030711] md:text-[64px] md:text-white">
          Style Redefined
        </h1>
        <p className="mx-auto mt-5 max-w-[650px] text-[16px] leading-[1.45] text-[#6B7280] md:mt-7 md:text-[20px] md:text-white">
          Discover the latest trends in fashion. Premium quality,
          <br className="hidden sm:block" /> sustainable materials, timeless designs.
        </p>
        <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:flex-row md:mt-8 md:gap-4">
          <a
            href="#featured"
            className="inline-flex h-12 w-full items-center justify-center gap-4 rounded-[9px] bg-[#030711] px-8 text-[14px] font-semibold text-white sm:w-auto"
          >
            Shop Now <img src={arrowIcon} alt="" className="h-4 w-4 invert" />
          </a>
          <a
            href="#categories"
            className="inline-flex h-12 w-full items-center justify-center rounded-[9px] border border-[#D1D5DB] bg-white px-8 text-[14px] font-semibold text-[#030711] sm:w-auto"
          >
            View Collection
          </a>
        </div>
      </div>
    </section>
  );
}
