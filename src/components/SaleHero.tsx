export function SaleHero() {
  return (
    <section className="bg-[linear-gradient(100deg,#BF3636_0%,#AF1F60_100%)] px-4 py-[34px] text-center text-white md:px-5 md:py-[88px]">
      <div className="mx-auto max-w-[760px]">
        <h1 className="text-[28px] font-bold leading-none tracking-[-0.025em] md:text-[58px]">MEGA SALE</h1>
        <p className="mx-auto mt-4 max-w-[350px] text-[12px] leading-[1.45] md:mt-7 md:max-w-[640px] md:text-[20px]">
          Up to 70% off on selected items. Limited time offer - don&apos;t miss out!
        </p>
        <div className="mx-auto mt-5 flex max-w-[358px] flex-col items-stretch justify-center gap-3 sm:flex-row md:mt-8 md:max-w-none md:items-center">
          <span className="inline-flex min-h-10 items-center justify-center rounded-full bg-white px-5 text-[11px] font-semibold text-[#EF4444] md:min-h-11 md:px-7 md:text-[15px]">
            Free shipping on all sale items
          </span>
          <span className="inline-flex min-h-10 items-center justify-center rounded-full bg-white px-5 text-[11px] font-semibold text-[#EF4444] md:min-h-11 md:px-7 md:text-[15px]">
            Extra 10% off for members
          </span>
        </div>
      </div>
    </section>
  );
}
