import type { Category } from "../data/storeData";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <article className="group relative h-[360px] overflow-hidden rounded-[10px] bg-[#E5E5E5] shadow-[0_10px_20px_rgba(0,0,0,0.12)] md:h-[326px]">
      <img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white md:p-5">
        <h3 className="text-[14px] font-medium md:text-[15px]">{category.name}</h3>
        <p className="mt-1 text-[10px] text-white/85 md:text-[11px]">{category.items}</p>
      </div>
    </article>
  );
}
