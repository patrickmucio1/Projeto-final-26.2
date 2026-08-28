import { AccountPageShell } from "../components/AccountPageShell";
import { DownloadIcon, EyeIcon, StarOutlineIcon } from "../components/ProfileIcons";
import { AccountOrder, accountOrders } from "../data/orderData";

const statusClass = {
  Delivered: "bg-[#DCFCE7] text-[#15803D]",
  Shipped: "bg-[#DBEAFE] text-[#2563EB]",
  Processing: "bg-[#FEF3C7] text-[#A16207]",
};

export function OrdersPage() {
  return (
    <AccountPageShell active="orders">
      <div className="mb-7 flex items-center justify-between gap-4 md:mb-6">
        <h2 className="text-[30px] font-bold md:text-[25px]">Order History</h2>
        <button type="button" className="flex h-12 items-center gap-3 rounded-[10px] border border-[#D8DCE3] px-5 text-[15px] font-medium md:h-10 md:text-[12px]"><DownloadIcon /> Export Orders</button>
      </div>
      <div className="space-y-6 md:space-y-4">
        {accountOrders.map((order) => <OrderCard key={order.id} order={order} />)}
      </div>
    </AccountPageShell>
  );
}

function OrderCard({ order }: { order: AccountOrder }) {
  return (
    <article className="rounded-[13px] border border-[#D8DCE3] bg-white p-6 md:p-6">
      <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-[20px] font-medium md:text-[16px]">Order {order.id}</h3>
            <span className={`inline-flex h-7 items-center gap-1 rounded-full px-3 text-[12px] font-medium md:h-6 md:text-[11px] ${statusClass[order.status]}`}><span className="text-[15px]">{order.status === "Delivered" ? "✓" : order.status === "Shipped" ? "▣" : "◷"}</span>{order.status}</span>
          </div>
          <div className="mt-3 space-y-1 text-[16px] leading-[1.4] text-[#7B8494] md:text-[13px]">
            <p>Placed on {order.placed}</p>
            <p>{order.address}</p>
            {order.tracking && <p>Tracking: {order.tracking}</p>}
          </div>
        </div>
        <div className="flex items-start justify-between gap-5 md:block md:text-right">
          <strong className="text-[26px] md:text-[20px]">{order.total}</strong>
          <div className="mt-0 flex gap-2 md:mt-4">
            <button type="button" className="flex h-11 items-center gap-2 rounded-[10px] border border-[#D8DCE3] px-5 text-[14px] font-medium md:h-9 md:px-4 md:text-[11px]"><EyeIcon /> View Details</button>
            {order.status === "Delivered" && <button type="button" className="hidden h-9 items-center gap-2 rounded-[10px] border border-[#D8DCE3] px-4 text-[11px] font-medium md:flex">◇ Reorder</button>}
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-[#E5E7EB] pt-6">
        <div className="space-y-6 md:space-y-4">
          {order.products.map((product) => (
            <div key={product.name} className="grid grid-cols-[80px_minmax(0,1fr)] gap-4 md:grid-cols-[64px_minmax(0,1fr)_130px] md:items-center">
              <img src={product.image} alt={product.name} className="h-20 w-20 rounded-[10px] bg-[#F0F0F0] object-cover object-top md:h-16 md:w-16" />
              <div className="min-w-0">
                <h4 className="text-[18px] font-semibold md:text-[14px]">{product.name}</h4>
                <p className="mt-1 text-[15px] leading-snug text-[#7B8494] md:text-[12px]">{product.meta}</p>
                <strong className="mt-1 block text-[18px] md:text-[14px]">{product.price}</strong>
              </div>
              <div className="col-span-2 flex justify-end gap-3 md:col-span-1 md:grid md:justify-items-end md:gap-2">
                <button type="button" className="h-11 rounded-[10px] border border-[#D8DCE3] px-5 text-[14px] font-medium md:h-9 md:text-[11px]">View Product</button>
                {product.review && <button type="button" className="flex h-11 items-center gap-2 rounded-[10px] border border-[#D8DCE3] px-5 text-[14px] font-medium md:h-9 md:text-[11px]"><StarOutlineIcon /> Review</button>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
