import premiumCottonTShirt from "../assets/sale/premium-cotton-t-shirt.webp";
import designerJeans from "../assets/sale/designer-jeans.webp";
import leatherAnkleBoots from "../assets/sale/leather-ankle-boots.webp";
import cashmereSweater from "../assets/sale/cashmere-sweater.webp";
import summerDress from "../assets/sale/summer-dress.webp";
import athleticSneakers from "../assets/sale/athletic-sneakers.jpg";

export type SaleProduct = {
  id: number;
  category: "Tops" | "Bottoms" | "Dresses" | "Shoes";
  name: string;
  rating: string;
  reviews: number;
  price: number;
  oldPrice: number;
  discount: string;
  saleLabel: string;
  promo: string;
  sizes: string[];
  image: string;
};

export const saleProducts: SaleProduct[] = [
  { id: 1, category: "Tops", name: "Premium Cotton T-Shirt", rating: "4.8", reviews: 124, price: 29, oldPrice: 49, discount: "-41%", saleLabel: "Limited Time", promo: "Save $20", sizes: ["XS", "S", "M", "L", "XL"], image: premiumCottonTShirt },
  { id: 2, category: "Bottoms", name: "Designer Jeans", rating: "4.9", reviews: 89, price: 79, oldPrice: 120, discount: "-34%", saleLabel: "Best Seller", promo: "Save $41", sizes: ["28", "30", "32", "34", "36"], image: designerJeans },
  { id: 3, category: "Shoes", name: "Leather Ankle Boots", rating: "4.7", reviews: 203, price: 99, oldPrice: 180, discount: "-45%", saleLabel: "Flash Sale", promo: "Save $81", sizes: ["6", "7", "8", "9", "10", "11"], image: leatherAnkleBoots },
  { id: 4, category: "Tops", name: "Cashmere Sweater", rating: "4.8", reviews: 156, price: 120, oldPrice: 200, discount: "-40%", saleLabel: "Luxury Sale", promo: "Save $80", sizes: ["S", "M", "L", "XL"], image: cashmereSweater },
  { id: 5, category: "Dresses", name: "Summer Dress", rating: "4.6", reviews: 91, price: 49, oldPrice: 89, discount: "-45%", saleLabel: "Summer Sale", promo: "Save $40", sizes: ["XS", "S", "M", "L"], image: summerDress },
  { id: 6, category: "Shoes", name: "Athletic Sneakers", rating: "4.5", reviews: 234, price: 84, oldPrice: 140, discount: "-40%", saleLabel: "Sport Sale", promo: "Save $56", sizes: ["6", "7", "8", "9", "10", "11"], image: athleticSneakers },
];

export const saleCategories = ["Tops", "Bottoms", "Dresses", "Shoes", "Accessories"];
export const saleSizes = ["XS", "S", "M", "L", "XL", "6", "7", "8", "9", "10", "11", "28", "30", "32", "34", "36"];
