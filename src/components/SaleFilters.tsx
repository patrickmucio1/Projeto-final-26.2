import chevronIcon from "../assets/chevron-down.svg";

type SaleFiltersProps = {
  categories: string[];
  sizes: string[];
};

function FilterCircle() {
  return <span className="h-[13px] w-[13px] shrink-0 rounded-full border border-[#111827] md:h-[15px] md:w-[15px]" />;
}

export function SaleFilters({ categories, sizes }: SaleFiltersProps) {
  return (
    <aside className="w-full md:w-[210px]" aria-label="Sale filters">
      <div className="mb-6 flex items-center gap-2 text-[12px] font-medium md:hidden">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 5h16l-6.2 7.1v5.2l-3.6 1.7v-6.9L4 5Z" />
        </svg>
        <span>Filters</span>
      </div>

      <fieldset>
        <legend className="text-[13px] font-semibold md:text-[16px]">Category</legend>
        <div className="mt-2 space-y-[6px] md:mt-3 md:space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center gap-2 text-[11px] md:text-[13px]">
              <FilterCircle />
              <span>{category}</span>
            </div>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6 md:mt-8">
        <legend className="text-[13px] font-semibold md:text-[16px]">Size</legend>
        <div className="mt-2 grid max-w-[300px] grid-cols-3 gap-x-8 gap-y-[6px] md:mt-3 md:gap-x-7 md:gap-y-2">
          {sizes.map((size) => (
            <div key={size} className="flex items-center gap-2 text-[11px] md:text-[13px]">
              <FilterCircle />
              <span>{size}</span>
            </div>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 md:mt-8">
        <p className="text-[13px] font-semibold md:text-[16px]">Price Range</p>
        <div className="relative mt-2 flex h-9 w-full items-center rounded-[7px] border border-[#E5E7EB] bg-white px-3 pr-9 text-[10px] md:mt-3 md:h-10 md:rounded-[8px] md:text-[12px]">
          <span>All Prices</span>
          <img src={chevronIcon} alt="" className="absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 opacity-50 md:h-4 md:w-4" />
        </div>
      </div>
    </aside>
  );
}
