export function SaleNewsletter() {
  return (
    <footer className="bg-[linear-gradient(100deg,#F04449_0%,#DD2973_100%)] px-[17px] pb-[62px] pt-[62px] text-center text-white md:px-5 md:py-[76px]">
      <div className="mx-auto w-full max-w-[372px] md:max-w-[720px]">
        <h2 className="text-[30px] font-bold leading-[1.15] tracking-[-0.02em] md:text-[30px]">
          Don&apos;t Miss Future Sales!
        </h2>
        <p className="mx-auto mt-[24px] max-w-[360px] text-[19px] leading-[1.5] md:mt-5 md:max-w-[640px] md:text-[16px] md:leading-6">
          Subscribe to our newsletter and be the first to know about exclusive sales and special offers.
        </p>
        <div className="mx-auto mt-[36px] flex w-full flex-col gap-[17px] md:mt-7 md:max-w-[470px] md:flex-row md:gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="h-[50px] w-full rounded-[13px] border-0 bg-white px-[17px] text-[17px] text-[#030711] outline-none placeholder:text-[#9CA3AF] md:h-11 md:flex-1 md:rounded-[8px] md:px-4 md:text-[12px]"
            aria-label="Email address"
          />
          <div className="flex h-[45px] w-full items-center justify-center rounded-[12px] bg-white px-8 text-[17px] font-semibold text-[#030711] md:h-11 md:w-auto md:rounded-[8px] md:text-[12px]">
            Subscribe
          </div>
        </div>
      </div>
    </footer>
  );
}
