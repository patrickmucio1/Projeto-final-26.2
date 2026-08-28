import { useNavigate } from "react-router-dom";
import starIcon from "../assets/Component 2-1.svg";
import { recommendedWishlistProducts } from "../data/wishlistData";

export function WishlistRecommendations() {
  const navigate = useNavigate();
  return (
    <section className="mt-12 pb-14 md:mt-16 md:pb-20">
      <h2 className="text-[20px] font-bold md:text-[26px]">You Might Also Like</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:mt-8 md:grid-cols-4 md:gap-6">
        {recommendedWishlistProducts.map((product) => (
          <article key={product.id} className="overflow-hidden rounded-[10px] bg-white shadow-[0_5px_14px_rgba(3,7,17,0.10)]">
            <div className="h-[286px] overflow-hidden bg-[#E7E7E7] md:h-[320px]">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover object-top" />
            </div>
            <div className="p-3.5 md:p-4">
              <h3 className="text-[12px] font-semibold md:text-[14px]">{product.name}</h3>
              <div className="mt-2 flex items-center gap-1 text-[10px] md:text-[11px]">
                <img src={starIcon} alt="" className="h-3.5 w-3.5" />
                <span>{product.rating}</span>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <strong className="text-[15px] md:text-[17px]">{product.price}</strong>
                <button type="button" onClick={() => navigate("/cart")} className="grid h-8 place-items-center rounded-[7px] border border-[#D1D5DB] px-3 text-[9px] font-medium md:h-9 md:px-4 md:text-[10px]">Add to Cart</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
