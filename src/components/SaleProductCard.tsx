import { Link, useNavigate } from "react-router-dom";
import starIcon from "../assets/Component 2-1.svg";
import bagIcon from "../assets/Component 2-9.svg";
import type { SaleProduct } from "../data/saleData";
import { FavoriteButton } from "./FavoriteButton";

export function SaleProductCard({ product }: { product: SaleProduct }) {
  const navigate = useNavigate();
  const imageContent = (
    <>
      <img src={product.image} alt={product.name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]" />
      <span className="absolute left-2.5 top-2.5 rounded-full bg-[#EF4444] px-2 py-[3px] text-[8px] font-semibold text-white md:left-3 md:top-3 md:px-2.5 md:py-1 md:text-[10px]">{product.discount}</span>
      <span className="absolute right-2.5 top-2.5 max-w-[105px] truncate rounded-full bg-[#F9FAFB]/95 px-2 py-[3px] text-[8px] font-medium text-[#030711] transition-[right] duration-200 md:right-3 md:top-3 md:max-w-[120px] md:px-2.5 md:py-1 md:text-[9px] md:group-hover:right-[58px]">{product.saleLabel}</span>
    </>
  );

  return (
    <article className="group relative overflow-hidden rounded-[10px] bg-white shadow-[0_4px_13px_rgba(3,7,17,0.10)] transition-[transform,box-shadow] duration-200 md:rounded-[12px] md:shadow-[0_5px_15px_rgba(3,7,17,0.10)] md:hover:-translate-y-[2px] md:hover:shadow-[0_12px_28px_rgba(3,7,17,0.14)]">
      <div className="relative h-[300px] overflow-hidden bg-[#E7E7E7] md:h-[315px]">
        {product.id === 1 ? (
          <Link to="/product/premium-cotton-t-shirt" aria-label="Open Premium Cotton T-Shirt product page" className="absolute inset-0 block">
            {imageContent}
          </Link>
        ) : imageContent}
        <FavoriteButton
          productKey={`sale-${product.id}`}
          label={product.name}
          className="absolute right-3 top-3 z-20 hidden h-10 w-10 place-items-center rounded-[12px] bg-white/95 opacity-0 shadow-[0_3px_10px_rgba(3,7,17,0.08)] transition-[opacity,transform] duration-200 md:grid md:group-hover:opacity-100"
          iconClassName="h-[18px] w-[18px]"
        />
      </div>

      <div className="p-3 md:p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-[#D1D5DB] px-2 py-[2px] text-[8px] leading-none text-[#374151] md:px-2.5 md:py-[3px] md:text-[9px]">{product.category}</span>
          <div className="flex items-center gap-1 text-[9px] md:text-[11px]">
            <img src={starIcon} alt="" className="h-3 w-3 md:h-4 md:w-4" />
            <span className="font-semibold">{product.rating}</span>
            <span className="text-[#6B7280]">({product.reviews})</span>
          </div>
        </div>

        <h3 className="mt-2 text-[12px] font-semibold leading-tight text-[#030711] md:mt-3 md:text-[16px]">{product.name}</h3>

        <div className="mt-2 flex flex-wrap items-center gap-1.5 md:mt-3 md:gap-2">
          <strong className="text-[18px] font-bold text-[#EF2B2D] md:text-[22px]">${product.price}</strong>
          <span className="text-[10px] text-[#9CA3AF] line-through md:text-[13px]">${product.oldPrice}</span>
          <span className="rounded-full bg-[#EF4444] px-2 py-[3px] text-[8px] font-semibold text-white md:py-1 md:text-[9px]">{product.promo}</span>
        </div>

        <div className="mt-3 grid grid-cols-[1fr_34px] gap-2 md:mt-4 md:grid-cols-[1fr_42px]">
          <button type="button" onClick={() => navigate("/cart")} className="flex h-8 items-center justify-center gap-2 rounded-[6px] bg-[#030711] px-3 text-[9px] font-medium text-white md:h-10 md:gap-3 md:rounded-[7px] md:px-4 md:text-[11px]">
            <img src={bagIcon} alt="" className="h-3 w-3 invert md:h-4 md:w-4" />
            Add to Cart
          </button>
          <FavoriteButton
            productKey={`sale-${product.id}`}
            label={product.name}
            className="grid h-8 place-items-center rounded-[6px] border border-[#D1D5DB] bg-white md:h-10 md:rounded-[7px]"
            iconClassName="h-3.5 w-3.5 md:h-4 md:w-4"
          />
        </div>
      </div>
    </article>
  );
}
