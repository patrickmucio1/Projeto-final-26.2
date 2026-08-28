import { Header } from "../components/Header";
import { SaleHero } from "../components/SaleHero";
import { SaleStats } from "../components/SaleStats";
import { SaleFilters } from "../components/SaleFilters";
import { SaleProductCard } from "../components/SaleProductCard";
import { SaleNewsletter } from "../components/SaleNewsletter";
import { saleCategories, saleProducts, saleSizes } from "../data/saleData";
import gridIcon from "../assets/grid-view.png";
import listIcon from "../assets/list-view.svg";
import chevronIcon from "../assets/chevron-down.svg";

export function SalePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <SaleHero />
        <SaleStats />

        <section className="px-4 py-5 md:px-8 md:py-[54px]">
          <div className="mx-auto grid max-w-[1210px] gap-7 md:grid-cols-[210px_minmax(0,1fr)] md:gap-[44px]">
            <SaleFilters categories={saleCategories} sizes={saleSizes} />

            <div className="min-w-0">
              <div className="mb-4 flex flex-col gap-3 md:mb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-[17px] font-bold leading-tight md:text-[23px]">Sale Items</h2>
                  <p className="mt-0.5 text-[10px] text-[#9CA3AF] md:mt-1 md:text-[13px]">6 products found</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative flex h-9 min-w-0 flex-1 items-center rounded-[7px] border border-[#E5E7EB] bg-white px-3 pr-8 text-[10px] sm:min-w-[165px] sm:flex-none md:h-10 md:rounded-[8px] md:px-4 md:pr-9 md:text-[12px]">
                    <span>Featured</span>
                    <img src={chevronIcon} alt="" className="absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 opacity-50 md:right-3 md:h-4 md:w-4" />
                  </div>
                  <div aria-label="Grid view" className="grid h-9 w-9 shrink-0 place-items-center rounded-[7px] border border-[#030711] bg-[#030711] md:h-10 md:w-10 md:rounded-[8px]">
                    <img src={gridIcon} alt="" className="h-4 w-4 md:h-[18px] md:w-[18px]" />
                  </div>
                  <div aria-label="List view" className="grid h-9 w-9 shrink-0 place-items-center rounded-[7px] border border-[#E5E7EB] bg-white md:h-10 md:w-10 md:rounded-[8px]">
                    <img src={listIcon} alt="" className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  </div>
                </div>
              </div>

              <div className="grid gap-3.5 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
                {saleProducts.map((product) => <SaleProductCard key={product.id} product={product} />)}
              </div>

              <div className="mt-7 text-center md:mt-11">
                <div className="inline-flex h-9 items-center rounded-[7px] border border-[#D1D5DB] bg-white px-7 text-[10px] font-semibold text-[#030711] md:h-11 md:rounded-[8px] md:px-8 md:text-[12px]">
                  Load More Products
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SaleNewsletter />
    </div>
  );
}
