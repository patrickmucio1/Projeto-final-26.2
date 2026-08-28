import { useNavigate } from "react-router-dom";
import bagIcon from "../assets/Component 2-9.svg";
import truckIcon from "../assets/Component 2-8.svg";
import returnsIcon from "../assets/Component 2-7.svg";
import shieldIcon from "../assets/Component 2-6.svg";
import shareIcon from "../assets/product/share.png";
import starFilled from "../assets/product/star-filled.png";
import starEmpty from "../assets/product/star-empty.png";
import { premiumCottonProduct, type ProductColorId } from "../data/productData";

function RatingStars() {
  return (
    <div className="flex items-center gap-[2px]" aria-label="4.8 out of 5 stars">
      {[0, 1, 2, 3].map((star) => (
        <img key={star} src={starFilled} alt="" className="h-4 w-4" />
      ))}
      <span className="relative block h-4 w-4 overflow-hidden">
        <img src={starEmpty} alt="" className="absolute inset-0 h-4 w-4" />
        <span className="absolute inset-y-0 left-0 w-[80%] overflow-hidden">
          <img src={starFilled} alt="" className="h-4 w-4 max-w-none" />
        </span>
      </span>
    </div>
  );
}

const benefits = [
  { icon: truckIcon, title: "Free Shipping", description: "On orders over $50" },
  { icon: returnsIcon, title: "Easy Returns", description: "30-day return policy" },
  { icon: shieldIcon, title: "Secure Payment", description: "100% secure checkout" },
];

type ProductDetailsProps = {
  selectedColorId: ProductColorId;
  onColorSelect: (colorId: ProductColorId) => void;
};

export function ProductDetails({ selectedColorId, onColorSelect }: ProductDetailsProps) {
  const navigate = useNavigate();
  const product = premiumCottonProduct;

  return (
    <section className="min-w-0">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-[#F3F4F6] px-3 py-1 text-[9px] font-medium text-[#374151] md:text-[10px]">{product.category}</span>
        <span className="rounded-full bg-[#F3F4F6] px-3 py-1 text-[9px] font-medium text-[#374151] md:text-[10px]">{product.label}</span>
      </div>

      <h1 className="mt-3 text-[27px] font-bold leading-[1.08] text-[#030711] md:text-[36px]">{product.name}</h1>
      <p className="mt-2 text-[11px] uppercase tracking-[0.03em] text-[#6B7280] md:text-[13px]">{product.brand}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2.5">
        <RatingStars />
        <span className="text-[12px] font-semibold text-[#374151]">{product.rating}</span>
        <span className="text-[11px] text-[#6B7280] md:text-[12px]">({product.reviews} reviews)</span>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <strong className="text-[29px] font-bold leading-none text-[#EF2B2D] md:text-[34px]">${product.price}</strong>
        <span className="text-[16px] text-[#6B7280] line-through md:text-[18px]">${product.oldPrice}</span>
        <span className="rounded-full bg-[#EF4444] px-3 py-1.5 text-[9px] font-semibold text-white md:text-[10px]">{product.promo}</span>
      </div>

      <div className="mt-5 flex items-center gap-2 text-[12px] font-semibold text-[#16A34A] md:text-[13px]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
        In Stock ({product.stock} left)
      </div>

      <div className="mt-6 border-t border-[#E5E7EB] pt-6">
        <p className="text-[12px] font-semibold md:text-[13px]">Color:</p>
        <div className="mt-3 flex items-center gap-3">
          {product.colors.map((color) => {
            const isSelected = selectedColorId === color.id;
            return (
              <button
                key={color.id}
                type="button"
                onClick={() => onColorSelect(color.id)}
                aria-label={`Select ${color.name} color`}
                aria-pressed={isSelected}
                title={color.name}
                className={`h-9 w-9 rounded-full border-[2px] transition-transform duration-200 hover:scale-105 ${isSelected ? "ring-2 ring-[#030711] ring-offset-2" : "border-[#D1D5DB]"}`}
                style={{ backgroundColor: color.swatch }}
              />
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-[12px] font-semibold md:text-[13px]">Size:</p>
        <div className="mt-3 grid grid-cols-5 gap-2.5">
          {product.sizes.map((size) => (
            <span
              key={size}
              className={`grid h-11 place-items-center rounded-[8px] border text-[11px] md:h-12 md:text-[12px] ${size === "XL" ? "border-[#F3F4F6] bg-[#F9FAFB] text-[#B9BEC6]" : "border-[#D1D5DB] bg-white text-[#030711]"}`}
            >
              {size}
            </span>
          ))}
        </div>
        <p className="mt-3 text-[10px] font-medium text-[#374151] underline decoration-[#D1D5DB] underline-offset-2 md:text-[11px]">Size Guide</p>
      </div>

      <div className="mt-6">
        <p className="text-[12px] font-semibold md:text-[13px]">Quantity</p>
        <div className="mt-3 flex items-center gap-3">
          <div className="grid h-10 grid-cols-[34px_44px_34px] items-center rounded-[8px] border border-[#D1D5DB] text-center text-[12px] md:h-11">
            <span className="text-[16px] text-[#6B7280]">−</span>
            <span>1</span>
            <span className="text-[16px]">+</span>
          </div>
          <span className="text-[10px] text-[#6B7280] md:text-[11px]">Max {product.maxQuantity} items</span>
        </div>
      </div>

      <div className="mt-7 border-t border-[#E5E7EB] pt-6">
        <div className="grid grid-cols-[1fr_52px] gap-3">
          <button type="button" onClick={() => navigate("/cart")} className="flex h-12 items-center justify-center gap-3 rounded-[8px] bg-[#030711] text-[12px] font-medium text-white md:h-[52px] md:text-[13px]">
            <img src={bagIcon} alt="" className="h-4 w-4 invert" />
            Add to Cart
          </button>
          <div className="grid h-12 place-items-center rounded-[8px] border border-[#D1D5DB] bg-white md:h-[52px]">
            <img src={shareIcon} alt="" className="h-[18px] w-[18px] object-contain" />
          </div>
        </div>
        <div className="mt-3 grid h-11 place-items-center rounded-[8px] border border-[#D1D5DB] bg-white text-[11px] font-semibold md:h-12 md:text-[12px]">Buy Now</div>
      </div>

      <div className="mt-7 grid grid-cols-3 border-y border-[#E5E7EB] py-6">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="flex flex-col items-center px-2 text-center">
            <img src={benefit.icon} alt="" className="h-6 w-6 md:h-7 md:w-7" />
            <strong className="mt-2 text-[9px] font-semibold leading-tight md:text-[11px]">{benefit.title}</strong>
            <span className="mt-1 text-[8px] leading-tight text-[#6B7280] md:text-[9px]">{benefit.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
