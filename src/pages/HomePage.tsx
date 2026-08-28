import { CategoriesSection } from "../components/CategoriesSection";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { Features } from "../components/Features";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Newsletter } from "../components/Newsletter";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <CategoriesSection />
        <FeaturedProducts />
      </main>
      <Newsletter />
    </div>
  );
}
