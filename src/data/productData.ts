import premiumGreen1 from "../assets/product/premium-green-1.jpg";
import premiumGreen2 from "../assets/product/premium-green-2.jpg";
import premiumGreen3 from "../assets/product/premium-green-3.jpg";
import premiumGreen4 from "../assets/product/premium-green-4.jpg";
import premiumKhaki1 from "../assets/product/premium-khaki-1.jpg";
import premiumKhaki2 from "../assets/product/premium-khaki-2.jpg";
import premiumKhaki3 from "../assets/product/premium-khaki-3.jpg";
import premiumKhaki4 from "../assets/product/premium-khaki-4.jpg";
import premiumGraphite1 from "../assets/product/premium-graphite-1.jpg";
import premiumGraphite2 from "../assets/product/premium-graphite-2.jpg";
import premiumGraphite3 from "../assets/product/premium-graphite-3.jpg";
import premiumGraphite4 from "../assets/product/premium-graphite-4.jpg";
import premiumRed1 from "../assets/product/premium-red-1.jpg";
import premiumRed2 from "../assets/product/premium-red-2.jpg";
import premiumRed3 from "../assets/product/premium-red-3.jpg";
import premiumRed4 from "../assets/product/premium-red-4.jpg";
import cottonPoloShirt from "../assets/product/cotton-polo-shirt.webp";
import casualHenley from "../assets/product/casual-henley.webp";
import premiumHoodie from "../assets/product/premium-hoodie.webp";

export type ProductColorId = "green" | "khaki" | "graphite" | "red";

export type ProductColor = {
  id: ProductColorId;
  name: string;
  swatch: string;
  images: string[];
};

export const premiumCottonProduct = {
  name: "Premium Cotton T-Shirt",
  brand: "STYLE Premium",
  category: "Tops",
  label: "Limited Time",
  rating: 4.8,
  reviews: 124,
  price: 29,
  oldPrice: 49,
  discount: "-41%",
  promo: "Save $20",
  stock: 12,
  maxQuantity: 12,
  colors: [
    {
      id: "green",
      name: "Green",
      swatch: "#2B8783",
      images: [premiumGreen1, premiumGreen2, premiumGreen3, premiumGreen4],
    },
    {
      id: "khaki",
      name: "Khaki",
      swatch: "#B87847",
      images: [premiumKhaki1, premiumKhaki2, premiumKhaki3, premiumKhaki4],
    },
    {
      id: "graphite",
      name: "Graphite",
      swatch: "#4C4D50",
      images: [premiumGraphite1, premiumGraphite2, premiumGraphite3, premiumGraphite4],
    },
    {
      id: "red",
      name: "Red",
      swatch: "#D84A59",
      images: [premiumRed1, premiumRed2, premiumRed3, premiumRed4],
    },
  ] satisfies ProductColor[],
  sizes: ["XS", "S", "M", "L", "XL"],
};

export const relatedProducts = [
  {
    id: 1,
    name: "Cotton Polo Shirt",
    rating: 4.7,
    price: 39,
    oldPrice: 55,
    image: cottonPoloShirt,
  },
  {
    id: 2,
    name: "Casual Henley",
    rating: 4.6,
    price: 35,
    image: casualHenley,
  },
  {
    id: 3,
    name: "Premium Hoodie",
    rating: 4.8,
    price: 79,
    oldPrice: 99,
    image: premiumHoodie,
  },
];
