import { Link } from "react-router-dom";
import premiumImage from "../assets/sale/premium-cotton-t-shirt.jpg";
import jeansImage from "../assets/sale/designer-jeans.webp";
import recommended1 from "../assets/wishlist/recommended-1.webp";
import recommended2 from "../assets/wishlist/recommended-2.webp";
import recommended3 from "../assets/wishlist/recommended-3.webp";
import recommended4 from "../assets/wishlist/recommended-4.webp";
import { Header } from "../components/Header";
import { CheckIcon, LocationIcon, LockIcon, MailIcon, PackageIcon, PhoneIcon } from "../components/CheckoutIcons";
import { useCheckout } from "../context/CheckoutContext";

function ending(cardNumber: string) {
  const digits = cardNumber.replace(/\D/g, "");
  return digits.slice(-4) || "4242";
}

const recommendations = [
  { name: "Recommended Item 1", rating: "4.6", price: "$39", image: recommended1 },
  { name: "Recommended Item 2", rating: "4.7", price: "$49", image: recommended2 },
  { name: "Recommended Item 3", rating: "4.8", price: "$59", image: recommended3 },
  { name: "Recommended Item 4", rating: "4.9", price: "$69", image: recommended4 },
];

export function OrderConfirmedPage() {
  const { shipping, payment } = useCheckout();
  const fullName = `${shipping.firstName} ${shipping.lastName}`.trim() || "John Doe";
  const address = shipping.address || "123 Main Street";
  const apartment = shipping.apartment || "Apt 4B";
  const cityLine = [shipping.city || "New York", shipping.state || "NY", shipping.zip || "10001"].filter(Boolean).join(", ");
  const email = shipping.email || "john.doe@example.com";
  const phone = shipping.phone || "+1 (555) 123-4567";
  const date = new Intl.DateTimeFormat("en-US", { month: "2-digit", day: "2-digit", year: "numeric" }).format(new Date());

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto w-full max-w-[1370px] px-4 pb-20 pt-7 md:px-8 md:pt-8">
        <section className="text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#DCFCE7] text-[#16A34A] md:h-16 md:w-16">
            <CheckIcon className="h-10 w-10" />
          </div>
          <h1 className="mt-5 text-[31px] font-bold md:text-[34px]">Order Confirmed!</h1>
          <p className="mt-2 text-[14px] text-[#7B8494] md:text-[15px]">Thank you for your order. We'll send you a confirmation email shortly.</p>
          <p className="mt-2 text-[10px] text-[#7B8494]">Order #ORD-2024-004 <span className="mx-3">•</span> {date}</p>
        </section>

        <div className="mx-auto mt-10 grid max-w-[900px] gap-5 md:grid-cols-[minmax(0,1.55fr)_minmax(280px,0.75fr)] md:items-start md:gap-7">
          <div className="space-y-5">
            <section className="rounded-[10px] border border-[#D1D5DB] p-5 md:p-6">
              <h2 className="flex items-center gap-2 text-[18px] font-semibold md:text-[17px]"><PackageIcon className="h-5 w-5" /> Order Status</h2>
              <div className="mt-5 flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#DCFCE7] text-[#16A34A]"><CheckIcon className="h-5 w-5" /></span>
                <div>
                  <p className="text-[13px] font-semibold">Order Confirmed</p>
                  <p className="text-[10px] text-[#7B8494]">{date}, 20:21:37</p>
                </div>
              </div>
            </section>

            <section className="rounded-[10px] border border-[#D1D5DB] p-5 md:p-6">
              <h2 className="text-[20px] font-semibold md:text-[19px]">Order Details</h2>
              <div className="mt-5 space-y-4">
                <OrderItem image={premiumImage} name="Premium Cotton T-Shirt" meta="Size: M • Color: Black • Qty: 2" price="$58.00" each="$29 each" />
                <OrderItem image={jeansImage} name="Designer Jeans" meta="Size: 32 • Color: Dark Blue • Qty: 1" price="$79.00" each="$79 each" />
              </div>
            </section>

            <div className="grid gap-5 md:grid-cols-2">
              <section className="rounded-[10px] border border-[#D1D5DB] p-5 md:p-6">
                <h2 className="flex items-center gap-2 text-[18px] font-semibold"><LocationIcon className="h-5 w-5" /> Shipping Address</h2>
                <div className="mt-5 text-[12px] leading-[1.65]">
                  <p className="font-semibold">{fullName}</p><p>{address}</p>{apartment && <p>{apartment}</p>}<p>{cityLine}</p>
                </div>
              </section>
              <section className="rounded-[10px] border border-[#D1D5DB] p-5 md:p-6">
                <h2 className="flex items-center gap-2 text-[18px] font-semibold"><span className="grid h-5 w-5 place-items-center rounded-sm border border-current">▭</span> Payment Method</h2>
                <div className="mt-5 text-[12px] leading-[1.7]"><p className="font-semibold">Visa ending in {ending(payment.cardNumber)}</p><p className="text-[#7B8494]">Charged $147.96</p></div>
              </section>
            </div>

            <section className="rounded-[10px] border border-[#D1D5DB] p-5 md:p-6">
              <h2 className="text-[18px] font-semibold">Contact Information</h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div className="flex gap-3"><MailIcon className="mt-0.5 h-5 w-5 text-[#7B8494]" /><div><p className="text-[12px] font-semibold">Email</p><p className="text-[11px] text-[#7B8494]">{email}</p></div></div>
                <div className="flex gap-3"><PhoneIcon className="mt-0.5 h-5 w-5 text-[#7B8494]" /><div><p className="text-[12px] font-semibold">Phone</p><p className="text-[11px] text-[#7B8494]">{phone}</p></div></div>
              </div>
            </section>
          </div>

          <aside className="space-y-5">
            <section className="rounded-[10px] border border-[#D1D5DB] p-5 md:p-6">
              <h2 className="text-[20px] font-semibold">Order Summary</h2>
              <div className="mt-5 space-y-3 text-[12px]">
                <div className="flex justify-between"><span>Subtotal</span><span>$137.00</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>Free</span></div>
                <div className="flex justify-between"><span>Tax</span><span>$10.96</span></div>
                <div className="mt-3 flex justify-between border-t border-[#D1D5DB] pt-4 text-[16px] font-bold"><span>Total</span><span>$147.96</span></div>
              </div>
            </section>

            <section className="rounded-[10px] border border-[#D1D5DB] p-5 md:p-6">
              <h2 className="text-[20px] font-semibold">Quick Actions</h2>
              <div className="mt-5 grid gap-2">
                <button type="button" className="h-10 rounded-[7px] bg-[#030711] text-[11px] font-medium text-white md:hidden">Track Your Order</button>
                <button type="button" className="h-10 rounded-[7px] border border-[#D1D5DB] text-[11px] font-medium md:hidden">Download Receipt</button>
                <button type="button" className="h-10 rounded-[7px] border border-[#D1D5DB] text-[11px] font-medium">View Order History</button>
                <Link to="/home" className="grid h-10 place-items-center rounded-[7px] border border-[#D1D5DB] text-[11px] font-medium">Continue Shopping</Link>
              </div>
            </section>

            <section className="rounded-[10px] border border-[#D1D5DB] p-5 md:p-6">
              <h2 className="text-[20px] font-semibold">Need Help?</h2>
              <p className="mt-4 text-[11px] leading-relaxed">If you have any questions about your order, please contact our customer service team.</p>
              <div className="mt-3 text-[10px] leading-[1.7]"><p>✉ support@style.com</p><p>☎ 1-800-STYLE-01</p><p>◷ Live Chat (9 AM - 6 PM EST)</p></div>
            </section>
          </aside>
        </div>

        <section className="mt-14 md:mt-16">
          <h2 className="text-center text-[22px] font-bold md:text-[21px]">Complete Your Look</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-4">
            {recommendations.map((item) => (
              <article key={item.name} className="overflow-hidden rounded-[10px] bg-white shadow-[0_4px_14px_rgba(0,0,0,0.12)]">
                <img src={item.image} alt={item.name} className="h-[330px] w-full bg-[#EAEAEA] object-cover md:h-[290px]" />
                <div className="p-4">
                  <h3 className="text-[13px] font-semibold">{item.name}</h3>
                  <p className="mt-2 text-[11px]"><span className="text-[#FFC107]">★</span> {item.rating}</p>
                  <div className="mt-4 flex items-center justify-between"><strong className="text-[14px]">{item.price}</strong><Link to="/cart" className="rounded-[7px] border border-[#D1D5DB] px-4 py-2 text-[10px] font-medium">Add to Cart</Link></div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

type OrderItemProps = { image: string; name: string; meta: string; price: string; each: string };

function OrderItem({ image, name, meta, price, each }: OrderItemProps) {
  return (
    <article className="grid grid-cols-[72px_minmax(0,1fr)_auto] items-start gap-3 md:grid-cols-[76px_minmax(0,1fr)_96px]">
      <img src={image} alt={name} className="h-[72px] w-[72px] rounded-[9px] bg-[#ECECEC] object-cover md:h-[76px] md:w-[76px]" />
      <div className="min-w-0"><h3 className="text-[12px] font-semibold md:text-[13px]">{name}</h3><p className="mt-1 text-[10px] text-[#7B8494]">{meta}</p><p className="mt-2 text-[12px] font-semibold">{each}</p></div>
      <div className="text-right"><strong className="text-[12px]">{price}</strong><button type="button" className="mt-3 block rounded-[6px] border border-[#D1D5DB] px-3 py-1.5 text-[9px]">☆ Review</button></div>
    </article>
  );
}
