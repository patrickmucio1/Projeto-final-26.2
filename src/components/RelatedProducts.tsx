import starIcon from "../assets/product/star-filled.png";
import { relatedProducts } from "../data/productData";

export function RelatedProducts() {
  return (
    <section className="mt-14 pb-16 md:mt-20 md:pb-24">
      <h2 className="text-[20px] font-bold md:text-[24px]">You Might Also Like</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3 md:gap-6">
        {relatedProducts.map((product) => (
          <article key={product.id} className="overflow-hidden rounded-[10px] bg-white shadow-[0_4px_14px_rgba(3,7,17,0.10)] transition-[transform,box-shadow] duration-300 md:hover:-translate-y-1 md:hover:shadow-[0_12px_26px_rgba(3,7,17,0.13)]">
            <div className="h-[310px] overflow-hidden bg-[#F3F3F3] md:h-[390px]">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover object-top transition-transform duration-500 md:hover:scale-[1.02]" />
            </div>
            <div className="p-4 md:p-5">
              <h3 className="text-[12px] font-semibold md:text-[14px]">{product.name}</h3>
              <div className="mt-2 flex items-center gap-1.5 text-[10px] md:text-[11px]">
                <img src={starIcon} alt="" className="h-4 w-4" />
                <span>{product.rating}</span>
              </div>
              <div className="mt-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <strong className="text-[13px] md:text-[15px]">${product.price}</strong>
                  {product.oldPrice && <span className="text-[10px] text-[#9CA3AF] line-through md:text-[11px]">${product.oldPrice}</span>}
                </div>
                <div className="grid h-9 place-items-center rounded-[7px] border border-[#D1D5DB] px-4 text-[10px] font-semibold md:text-[11px]">View</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
