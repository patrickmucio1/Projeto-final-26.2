import { useNavigate } from "react-router-dom";
import bagIcon from "../assets/Component 2-9.svg";
import starIcon from "../assets/Component 2-1.svg";
import { FavoriteButton } from "./FavoriteButton";
import type { WishlistCatalogItem } from "../data/wishlistData";

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="M4 7h16M9 7V4h6v3m-8 0 1 13h8l1-13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 11v5M14 11v5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function WishlistProductCard({ item }: { item: WishlistCatalogItem }) {
  const navigate = useNavigate();
  return (
    <article className="overflow-hidden rounded-[11px] bg-white shadow-[0_7px_18px_rgba(3,7,17,0.10)]">
      <div className={`relative h-[292px] overflow-hidden md:h-[330px] ${item.outOfStock ? "bg-[#BDBDBD]" : "bg-[#E7E7E7]"}`}>
        <img
          src={item.image}
          alt={item.name}
          className={`h-full w-full object-cover object-top ${item.outOfStock ? "opacity-45 grayscale-[25%]" : ""}`}
        />
        {item.discount && (
          <span className="absolute left-3 top-3 rounded-full bg-[#EF2B2D] px-3 py-1 text-[9px] font-semibold text-white md:text-[10px]">
            {item.discount}
          </span>
        )}
        {item.saleLabel && (
          <span className={`absolute left-3 top-[42px] max-w-[110px] rounded-full px-3 py-1.5 text-[9px] font-medium leading-tight md:text-[10px] ${item.outOfStock ? "bg-[#CF3838] text-white" : "bg-white/85 text-[#030711]"}`}>
            {item.saleLabel}
          </span>
        )}
        {item.outOfStock && (
          <>
            <span className="absolute left-3 top-[78px] rounded-full bg-[#CF3838] px-3 py-1.5 text-[9px] font-medium leading-tight text-white md:text-[10px]">Out of<br />Stock</span>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-[7px] bg-white/95 px-4 py-2 text-[9px] font-medium text-[#030711] shadow-sm md:text-[10px]">Notify when available</span>
          </>
        )}
        <FavoriteButton
          productKey={item.key}
          label={item.name}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-[8px] bg-white/95 shadow-sm md:h-10 md:w-10 md:rounded-[9px]"
          iconClassName="h-4 w-4 md:h-[18px] md:w-[18px]"
        />
      </div>

      <div className="p-3.5 md:p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="max-w-[150px] truncate rounded-full border border-[#D1D5DB] px-2.5 py-[3px] text-[8px] leading-none text-[#374151] md:text-[9px]">{item.label}</span>
          <div className="flex items-center gap-1 text-[9px] md:text-[10px]">
            <img src={starIcon} alt="" className="h-3 w-3 md:h-3.5 md:w-3.5" />
            <span className="font-semibold">{item.rating}</span>
            <span className="text-[#6B7280]">({item.reviews})</span>
          </div>
        </div>

        <h2 className="mt-2 text-[12px] font-semibold leading-tight md:text-[14px]">{item.name}</h2>

        <div className="mt-2 flex items-baseline gap-2">
          <strong className="text-[16px] md:text-[18px]">{item.price}</strong>
          {item.oldPrice && <span className="text-[10px] text-[#9CA3AF] line-through md:text-[11px]">{item.oldPrice}</span>}
        </div>

        <p className="mt-2 text-[8px] text-[#9CA3AF] md:text-[9px]">Added {item.addedDate}</p>

        <div className="mt-3 grid grid-cols-[1fr_36px] gap-2 md:grid-cols-[1fr_40px]">
          <button type="button" onClick={() => !item.outOfStock && navigate("/cart")} className={`flex h-9 items-center justify-center gap-2 rounded-[7px] text-[9px] font-medium text-white md:h-10 md:text-[10px] ${item.outOfStock ? "bg-[#999999]" : "bg-[#030711]"}`}>
            <img src={bagIcon} alt="" className="h-3.5 w-3.5 invert" />
            {item.outOfStock ? "Notify Me" : "Add to Cart"}
          </button>
          <div className="grid h-9 place-items-center rounded-[7px] border border-[#D1D5DB] bg-white md:h-10">
            <TrashIcon />
          </div>
        </div>
      </div>
    </article>
  );
}
