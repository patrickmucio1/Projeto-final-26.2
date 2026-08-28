import { useEffect, useState } from "react";
import { FavoriteButton } from "./FavoriteButton";

type ProductGalleryProps = {
  images: string[];
  discount: string;
  name: string;
  colorName: string;
};

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d={direction === "left" ? "m14.5 6-6 6 6 6" : "m9.5 6 6 6-6 6"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProductGallery({ images, discount, name, colorName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [images]);

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <section aria-label="Product gallery">
      <div className="group relative aspect-square overflow-hidden rounded-[10px] bg-[#F3F3F3] md:rounded-[12px]">
        <img
          key={images[activeIndex]}
          src={images[activeIndex]}
          alt={`${name} in ${colorName}, view ${activeIndex + 1}`}
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-[#EF2B2D] px-3 py-1.5 text-[10px] font-semibold text-white md:left-5 md:top-5 md:text-[12px]">
          {discount}
        </span>
        <FavoriteButton
          productKey="sale-1"
          label={name}
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-[10px] bg-white/95 shadow-sm md:right-5 md:top-5 md:h-11 md:w-11"
          iconClassName="h-4 w-4 md:h-[18px] md:w-[18px]"
        />
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous product image"
          className="absolute left-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-[9px] bg-white/90 text-[#030711] shadow-sm transition-transform duration-200 hover:scale-105 md:left-5 md:h-11 md:w-11"
        >
          <ArrowIcon direction="left" />
        </button>
        <button
          type="button"
          onClick={showNext}
          aria-label="Next product image"
          className="absolute right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-[9px] bg-white/90 text-[#030711] shadow-sm transition-transform duration-200 hover:scale-105 md:right-5 md:h-11 md:w-11"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-3 md:mt-4 md:gap-4">
        {images.slice(0, 4).map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${colorName} product view ${index + 1}`}
            className={`aspect-square overflow-hidden rounded-[7px] bg-[#F3F3F3] transition-shadow duration-200 ${activeIndex === index ? "ring-2 ring-[#030711]" : "ring-1 ring-[#E5E7EB]"}`}
          >
            <img src={image} alt={`${name} in ${colorName}, view ${index + 1}`} className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-[1.025]" />
          </button>
        ))}
      </div>
    </section>
  );
}
