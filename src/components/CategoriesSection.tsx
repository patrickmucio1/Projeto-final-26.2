import { categories } from "../data/storeData";
import { CategoryCard } from "./CategoryCard";
import { SectionHeading } from "./SectionHeading";

export function CategoriesSection() {
  return (
    <section id="categories" className="bg-white px-5 py-[96px] md:px-8 md:py-[98px]">
      <div className="mx-auto max-w-[1376px]">
        <SectionHeading title="Shop by Category" subtitle="Explore our carefully curated collections for every style and occasion" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => <CategoryCard key={category.name} category={category} />)}
        </div>
      </div>
    </section>
  );
}
