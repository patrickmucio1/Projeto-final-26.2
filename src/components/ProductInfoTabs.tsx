export function ProductInfoTabs() {
  return (
    <section className="mt-12 md:mt-16">
      <div className="grid grid-cols-3 rounded-[9px] bg-[#F3F4F6] p-1 text-center text-[9px] text-[#6B7280] md:text-[11px]">
        <div className="rounded-[7px] bg-white py-2 font-semibold text-[#030711] shadow-sm">Description</div>
        <div className="py-2">Specifications</div>
        <div className="py-2">Reviews (124)</div>
      </div>

      <div className="mt-5 rounded-[10px] border border-[#E5E7EB] bg-white p-5 text-[12px] leading-5 text-[#111827] md:p-7 md:text-[14px] md:leading-6">
        <p>
          Made from 100% premium organic cotton, this t-shirt offers exceptional comfort and style. The perfect addition to your wardrobe for both casual and semi-formal occasions.
        </p>
        <strong className="mt-5 block text-[11px] md:text-[12px]">Key Features:</strong>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>100% Organic Cotton</li>
          <li>Pre-shrunk fabric</li>
          <li>Reinforced seams</li>
          <li>Machine washable</li>
          <li>Eco-friendly dyes</li>
        </ul>
      </div>
    </section>
  );
}
