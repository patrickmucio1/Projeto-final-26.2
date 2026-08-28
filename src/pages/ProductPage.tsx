import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { ProductGallery } from "../components/ProductGallery";
import { ProductDetails } from "../components/ProductDetails";
import { ProductInfoTabs } from "../components/ProductInfoTabs";
import { RelatedProducts } from "../components/RelatedProducts";
import { premiumCottonProduct, type ProductColorId } from "../data/productData";

export function ProductPage() {
  const [selectedColorId, setSelectedColorId] = useState<ProductColorId>("green");

  const selectedColor = useMemo(
    () => premiumCottonProduct.colors.find((color) => color.id === selectedColorId) ?? premiumCottonProduct.colors[0],
    [selectedColorId],
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto w-full max-w-[1240px] px-4 pb-8 pt-5 md:px-8 md:pt-8">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[9px] text-[#6B7280] md:text-[11px]">
          <Link to="/home">Home</Link>
          <span>/</span>
          <Link to="/sale">Sale</Link>
          <span>/</span>
          <span className="text-[#030711]">{premiumCottonProduct.name}</span>
        </nav>

        <div className="mt-5 grid gap-8 md:mt-7 md:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)] md:gap-11">
          <ProductGallery
            images={selectedColor.images}
            discount={premiumCottonProduct.discount}
            name={premiumCottonProduct.name}
            colorName={selectedColor.name}
          />
          <ProductDetails selectedColorId={selectedColorId} onColorSelect={setSelectedColorId} />
        </div>

        <ProductInfoTabs />
        <RelatedProducts />
      </main>
    </div>
  );
}
