import { Link } from "react-router-dom";
import heartIcon from "../assets/Component 2-10.svg";
import { Header } from "../components/Header";
import premiumImage from "../assets/sale/premium-cotton-t-shirt.jpg";
import jeansImage from "../assets/sale/designer-jeans.webp";
import summerDressImage from "../assets/sale/summer-dress.webp";

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M15 5 8 12l7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="M4 7h16M9 7V4h6v3m-8 0 1 13h8l1-13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 11v5M14 11v5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M20 13.5 13.5 20 4 10.5V4h6.5L20 13.5Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="8" cy="8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.5v6M12 17h.01" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const availableItems = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    brand: "STYLE Premium",
    size: "M",
    color: "Black",
    quantity: 2,
    max: 10,
    price: "$29",
    oldPrice: "$49",
    saving: "Save $20",
    image: premiumImage,
  },
  {
    id: 2,
    name: "Designer Jeans",
    brand: "STYLE Premium",
    size: "32",
    color: "Dark Blue",
    quantity: 1,
    max: 5,
    price: "$79",
    oldPrice: "$120",
    saving: "Save $41",
    image: jeansImage,
  },
];

function ProductImage({ src, alt, muted = false }: { src: string; alt: string; muted?: boolean }) {
  return <img src={src} alt={alt} className={`h-[98px] w-[98px] shrink-0 rounded-[10px] object-cover md:h-[94px] md:w-[94px] ${muted ? "opacity-60 grayscale-[20%]" : ""}`} />;
}

function QuantityControl({ quantity, max }: { quantity: number; max: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-9 grid-cols-[34px_42px_34px] items-center rounded-[7px] border border-[#D1D5DB] text-center text-[13px]">
        <span className="text-[18px] text-[#6B7280]">−</span>
        <span>{quantity}</span>
        <span className="text-[18px]">+</span>
      </div>
      <span className="text-[10px] leading-tight text-[#6B7280]">Max {max}</span>
    </div>
  );
}

function ItemActions() {
  return (
    <div className="flex items-center gap-6 text-[11px] font-medium md:text-[12px]">
      <div className="flex items-center gap-2">
        <img src={heartIcon} alt="" className="h-4 w-4" />
        Save for Later
      </div>
      <div className="flex items-center gap-2">
        <TrashIcon />
        Remove
      </div>
    </div>
  );
}

export function CartPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto w-full max-w-[1376px] px-4 pb-16 pt-6 md:px-8 md:pt-10">
        <div className="flex items-center gap-4 md:gap-5">
          <Link to="/home" aria-label="Back to home" className="grid h-7 w-7 place-items-center rounded-full">
            <ArrowLeftIcon />
          </Link>
          <h1 className="text-[31px] font-bold leading-tight md:text-[35px]">Shopping Cart</h1>
          <span className="rounded-full bg-[#F3F4F6] px-3 py-1 text-[10px] font-semibold md:text-[11px]">3 items</span>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[minmax(0,1.8fr)_minmax(360px,0.88fr)] md:items-start md:gap-8">
          <div className="space-y-6">
            <section className="rounded-[12px] border border-[#D1D5DB] bg-white p-4 md:p-6">
              <h2 className="flex items-center gap-3 text-[22px] font-semibold md:text-[23px]">
                <span className="h-3 w-3 rounded-full bg-[#22C55E]" />
                Available Items (2)
              </h2>

              <div className="mt-5 divide-y divide-[#E5E7EB]">
                {availableItems.map((item) => (
                  <article key={item.id} className="grid gap-4 py-5 first:pt-0 md:grid-cols-[94px_minmax(0,1fr)] md:gap-5">
                    <ProductImage src={item.image} alt={item.name} />
                    <div className="min-w-0">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <h3 className="text-[18px] font-semibold leading-tight md:text-[17px]">{item.name}</h3>
                          <p className="mt-1 text-[11px] text-[#6B7280]">{item.brand}</p>
                          <p className="mt-3 text-[11px] text-[#6B7280]">Size: {item.size} <span className="ml-4">Color: {item.color}</span></p>
                        </div>
                        <div className="shrink-0 text-right">
                          <div className="flex items-baseline justify-end gap-2">
                            <strong className="text-[17px]">{item.price}</strong>
                            <span className="text-[11px] text-[#9CA3AF] line-through">{item.oldPrice}</span>
                          </div>
                          <span className="mt-1 inline-flex rounded-full bg-[#EF4444] px-2.5 py-1 text-[9px] font-semibold text-white">{item.saving}</span>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <QuantityControl quantity={item.quantity} max={item.max} />
                        <ItemActions />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-[12px] border border-[#FECACA] bg-white p-4 md:p-6">
              <h2 className="flex items-center gap-3 text-[22px] font-semibold text-[#DC2626] md:text-[23px]">
                <AlertIcon />
                Out of Stock (1)
              </h2>

              <article className="mt-5 grid gap-4 md:grid-cols-[94px_minmax(0,1fr)] md:gap-5">
                <div className="relative">
                  <ProductImage src={summerDressImage} alt="Summer Dress" muted />
                  <span className="absolute left-1 top-[45px] rounded-full bg-[#FF8585] px-2 py-1 text-[8px] font-medium text-white">Out of Stock</span>
                </div>
                <div className="min-w-0 text-[#6B7280]">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-[18px] font-semibold leading-tight md:text-[17px]">Summer Dress</h3>
                      <p className="mt-1 text-[11px] text-[#9CA3AF]">STYLE Collection</p>
                    </div>
                    <strong className="text-[17px]">$49</strong>
                  </div>

                  <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                      <div className="grid h-10 place-items-center rounded-[8px] border border-[#D1D5DB] px-4 text-[11px] font-medium">Notify When Available</div>
                      <p className="mt-4 text-[11px]">Size: S <span className="ml-4">Color: Floral</span></p>
                    </div>
                    <ItemActions />
                  </div>
                </div>
              </article>
            </section>
          </div>

          <aside className="space-y-5">
            <section className="rounded-[12px] border border-[#D1D5DB] bg-white p-5 md:p-6">
              <h2 className="flex items-center gap-3 text-[22px] font-semibold">
                <TagIcon />
                Promo Code
              </h2>
              <div className="mt-5 flex gap-2">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="h-11 min-w-0 flex-1 rounded-[8px] border border-[#D1D5DB] px-3 text-[12px] outline-none placeholder:text-[#9CA3AF]"
                />
                <div className="grid h-11 place-items-center rounded-[8px] bg-[#8B8D93] px-5 text-[12px] font-semibold text-white">Apply</div>
              </div>
              <p className="mt-4 text-[10px] text-[#6B7280]">Try: SAVE10, WELCOME20, STUDENT15</p>
            </section>

            <section className="rounded-[12px] border border-[#D1D5DB] bg-white p-5 md:p-6">
              <h2 className="text-[22px] font-semibold">Order Summary</h2>
              <div className="mt-6 space-y-4 text-[13px]">
                <div className="flex items-center justify-between"><span>Subtotal (2 items)</span><span>$186.00</span></div>
                <div className="flex items-center justify-between text-[#16A34A]"><span>Savings</span><span>-$121.00</span></div>
                <div className="flex items-center justify-between"><span className="flex items-center gap-2">Shipping <span className="rounded-full bg-[#F3F4F6] px-2 py-0.5 text-[9px] font-semibold">Free</span></span><span>$0.00</span></div>
              </div>
              <div className="mt-4 border-t border-[#D1D5DB] pt-4">
                <div className="flex items-center justify-between text-[18px] font-bold"><span>Total</span><span>$186.00</span></div>
              </div>
              <Link to="/checkout/shipping" className="mt-7 grid h-12 place-items-center rounded-[8px] bg-[#030711] text-[12px] font-medium text-white">Proceed to Checkout</Link>
              <Link to="/home" className="mt-3 grid h-11 place-items-center rounded-[8px] border border-[#D1D5DB] bg-white text-[12px] font-medium">Continue Shopping</Link>
              <p className="mt-5 text-center text-[10px] leading-relaxed text-[#6B7280]">Secure checkout with SSL encryption<br />30-day return policy • Free returns</p>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
