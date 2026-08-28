import premiumImage from "../assets/sale/premium-cotton-t-shirt.jpg";
import jeansImage from "../assets/sale/designer-jeans.webp";
import { LockIcon, TruckIcon } from "./CheckoutIcons";

const items = [
  {
    name: "Premium Cotton T-Shirt",
    meta: "M • Black • Qty: 2",
    price: "$29",
    oldPrice: "$49",
    image: premiumImage,
  },
  {
    name: "Designer Jeans",
    meta: "32 • Dark Blue • Qty: 1",
    price: "$79",
    oldPrice: "$120",
    image: jeansImage,
  },
];

export function CheckoutOrderSummary() {
  return (
    <section className="rounded-[12px] border border-[#D1D5DB] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] md:p-6">
      <h2 className="text-[27px] font-semibold leading-tight md:text-[22px]">Order Summary</h2>
      <div className="mt-6 space-y-3 md:mt-5">
        {items.map((item) => (
          <article key={item.name} className="flex items-center gap-3">
            <img src={item.image} alt={item.name} className="h-[76px] w-[76px] rounded-[10px] bg-[#ECECEC] object-cover md:h-[62px] md:w-[62px]" />
            <div className="min-w-0 flex-1">
              <h3 className="text-[15px] font-semibold leading-tight md:text-[13px]">{item.name}</h3>
              <p className="mt-1 text-[12px] text-[#7B8494] md:text-[10px]">{item.meta}</p>
              <div className="mt-1 flex items-center gap-2">
                <strong className="text-[17px] md:text-[14px]">{item.price}</strong>
                <span className="text-[12px] text-[#7B8494] line-through md:text-[10px]">{item.oldPrice}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5 border-t border-[#D1D5DB] pt-5 text-[15px] md:text-[12px]">
        <div className="flex justify-between py-1"><span>Subtotal</span><span>$137.00</span></div>
        <div className="flex justify-between py-1 text-[#16A34A]"><span>Savings</span><span>-$81.00</span></div>
        <div className="flex justify-between py-1"><span>Shipping</span><span>$0.00</span></div>
        <div className="flex justify-between py-1"><span>Tax</span><span>$10.96</span></div>
      </div>
      <div className="mt-2 border-y border-[#D1D5DB] py-4">
        <div className="flex justify-between text-[20px] font-bold md:text-[16px]"><span>Total</span><span>$147.96</span></div>
      </div>
      <div className="mt-5 flex items-center justify-center gap-5 text-[12px] text-[#7B8494] md:text-[10px]">
        <span className="flex items-center gap-1.5"><LockIcon /> Secure</span>
        <span className="flex items-center gap-1.5"><TruckIcon /> Free Returns</span>
      </div>
    </section>
  );
}
