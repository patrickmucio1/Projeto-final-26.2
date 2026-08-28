const stats = [
  { value: "70%", label: "Max Discount" },
  { value: "500+", label: "Items on Sale" },
  { value: "48h", label: "Time Left" },
  { value: "Free", label: "Shipping" },
];

export function SaleStats() {
  return (
    <section className="bg-[#FBFCFC] px-4 py-6 md:px-5 md:py-11" aria-label="Sale highlights">
      <div className="mx-auto grid max-w-[1160px] grid-cols-2 gap-x-8 gap-y-5 text-center md:grid-cols-4 md:gap-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong className="block text-[19px] font-bold leading-none text-[#EF4444] md:text-[32px]">{stat.value}</strong>
            <span className="mt-1 block text-[9px] text-[#6B7280] md:mt-2 md:text-[12px]">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
