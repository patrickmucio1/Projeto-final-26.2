import { useState } from "react";
import starIcon from "../assets/Component 2-1.svg";
import type { Product } from "../data/storeData";

export function ProductCard({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);

  return (
    <article className="overflow-hidden rounded-[10px] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.10)]">
      <div className="relative h-[300px] overflow-hidden bg-[#E7E7E7] md:h-[315px]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
        <span className={`absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-[9px] font-semibold text-white md:left-4 md:top-4 md:px-3 md:py-[5px] md:text-[10px] ${product.badgeTone === "sale" ? "bg-[#EF4444]" : "bg-[#030711]"}`}>
          {product.badge}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-[14px] font-semibold">{product.name}</h3>
        <div className="mt-2 flex items-center gap-1 text-[11px]">
          <img src={starIcon} alt="" className="h-4 w-4" />
          <span className="font-semibold">{product.rating}</span>
          <span className="text-[#6B7280]">({product.reviews})</span>
        </div>
        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="flex items-end gap-2">
            <strong className="text-[19px]">{product.price}</strong>
            {product.oldPrice && <span className="pb-[2px] text-[11px] text-[#9CA3AF] line-through">{product.oldPrice}</span>}
          </div>
          <button
            type="button"
            onClick={() => setAdded((value) => !value)}
            className="h-9 rounded-[8px] border border-[#D1D5DB] px-3 text-[10px] font-semibold transition-colors hover:bg-[#F9FAFB] md:px-4 md:text-[11px]"
          >
            {added ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </article>
  );
}
