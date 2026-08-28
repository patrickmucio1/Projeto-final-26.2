import returnsIcon from "../assets/Component 2-7.svg";
import truckIcon from "../assets/Component 2-8.svg";
import shieldIcon from "../assets/Component 2-6.svg";

import womensFashionImage from "../assets/cards/womens-fashion.avif";
import mensFashionImage from "../assets/cards/mens-fashion.webp";
import accessoriesImage from "../assets/cards/accessories.jpg";
import shoesImage from "../assets/cards/shoes.avif";

import vintageDenimJacketImage from "../assets/cards/vintage-denim-jacket.jpg";
import oversizedBlazerImage from "../assets/cards/oversized-blazer.webp";
import comfortSlimJeansImage from "../assets/cards/comfort-slim-jeans.webp";
import silkBlouseImage from "../assets/cards/silk-blouse.jpg";

export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export type Category = {
  name: string;
  items: string;
  image: string;
};

export type Product = {
  id: number;
  badge: string;
  badgeTone?: "dark" | "sale";
  name: string;
  rating: string;
  reviews: number;
  price: string;
  oldPrice?: string;
  image: string;
};

export const features: Feature[] = [
  { title: "Free Shipping", description: "Free shipping on orders over $100", icon: truckIcon },
  { title: "Easy Returns", description: "30-day hassle-free returns", icon: returnsIcon },
  { title: "Secure Payment", description: "Your payment information is safe", icon: shieldIcon },
];

export const categories: Category[] = [
  { name: "Women's Fashion", items: "500+ items", image: womensFashionImage },
  { name: "Men's Fashion", items: "350+ items", image: mensFashionImage },
  { name: "Accessories", items: "200+ items", image: accessoriesImage },
  { name: "Shoes", items: "180+ items", image: shoesImage },
];

export const products: Product[] = [
  { id: 1, badge: "Best Seller", name: "Vintage Denim Jacket", rating: "4.8", reviews: 124, price: "$89", oldPrice: "$120", image: vintageDenimJacketImage },
  { id: 2, badge: "New", name: "Oversized Blazer", rating: "4.9", reviews: 89, price: "$145", image: oversizedBlazerImage },
  { id: 3, badge: "Sale", badgeTone: "sale", name: "Comfort Slim Jeans", rating: "4.7", reviews: 203, price: "$79", oldPrice: "$99", image: comfortSlimJeansImage },
  { id: 4, badge: "Premium", name: "Silk Blouse", rating: "4.8", reviews: 156, price: "$125", image: silkBlouseImage },
];
