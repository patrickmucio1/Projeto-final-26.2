import arrowIcon from "../assets/Component 2.svg";
import { products } from "../data/storeData";
import { ProductCard } from "./ProductCard";
import { SectionHeading } from "./SectionHeading";

export function FeaturedProducts() {
  return (
    <section id="featured" className="bg-[#FCFCFC] px-5 py-[96px] md:px-8 md:py-[112px]">
      <div className="mx-auto max-w-[1376px]">
        <SectionHeading title="Featured Products" subtitle="Handpicked favorites from our latest collection" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
        <div className="mt-12 text-center">
          <button type="button" className="inline-flex h-11 items-center gap-4 rounded-[8px] border border-[#D1D5DB] bg-white px-7 text-[12px] font-semibold">
            View All Products <img src={arrowIcon} alt="" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
