import { products as homeProducts } from "./storeData";
import { saleProducts } from "./saleData";
import recommended1 from "../assets/wishlist/recommended-1.webp";
import recommended2 from "../assets/wishlist/recommended-2.webp";
import recommended3 from "../assets/wishlist/recommended-3.webp";
import recommended4 from "../assets/wishlist/recommended-4.webp";

export type WishlistCatalogItem = {
  key: string;
  name: string;
  image: string;
  label: string;
  rating: string;
  reviews: number;
  price: string;
  oldPrice?: string;
  discount?: string;
  saleLabel?: string;
  addedDate: string;
  outOfStock?: boolean;
};

const saleMetadata: Record<number, Pick<WishlistCatalogItem, "label" | "addedDate">> = {
  1: { label: "STYLE Premium", addedDate: "14/01/2024" },
  2: { label: "STYLE Denim", addedDate: "12/01/2024" },
  3: { label: "STYLE Footwear", addedDate: "11/01/2024" },
  4: { label: "STYLE Luxury", addedDate: "09/01/2024" },
  5: { label: "STYLE Summer", addedDate: "07/01/2024" },
  6: { label: "STYLE Sport", addedDate: "04/01/2024" },
};

export const wishlistCatalog: WishlistCatalogItem[] = [
  ...saleProducts.map((product) => ({
    key: `sale-${product.id}`,
    name: product.name,
    image: product.image,
    label: saleMetadata[product.id].label,
    rating: product.rating,
    reviews: product.reviews,
    price: `$${product.price}`,
    oldPrice: `$${product.oldPrice}`,
    discount: product.discount,
    saleLabel: product.saleLabel,
    addedDate: saleMetadata[product.id].addedDate,
    outOfStock: product.id === 6,
  })),
  ...homeProducts.map((product) => ({
    key: `home-${product.id}`,
    name: product.name,
    image: product.image,
    label: `STYLE ${product.badge}`,
    rating: product.rating,
    reviews: product.reviews,
    price: product.price,
    oldPrice: product.oldPrice,
    saleLabel: product.badge,
    addedDate: "18/01/2024",
  })),
];

export const recommendedWishlistProducts = [
  { id: 1, name: "Recommended Item 1", rating: "4.6", price: "$39", image: recommended1 },
  { id: 2, name: "Recommended Item 2", rating: "4.7", price: "$49", image: recommended2 },
  { id: 3, name: "Recommended Item 3", rating: "4.8", price: "$59", image: recommended3 },
  { id: 4, name: "Recommended Item 4", rating: "4.9", price: "$69", image: recommended4 },
];
