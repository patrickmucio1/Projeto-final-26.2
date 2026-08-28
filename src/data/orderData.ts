import premiumImage from "../assets/sale/premium-cotton-t-shirt.jpg";
import jeansImage from "../assets/sale/designer-jeans.webp";
import cashmereImage from "../assets/sale/cashmere-sweater.webp";
import sneakersImage from "../assets/sale/athletic-sneakers.jpg";

export type OrderStatus = "Delivered" | "Shipped" | "Processing";

export type AccountOrder = {
  id: string;
  total: string;
  status: OrderStatus;
  placed: string;
  address: string;
  tracking?: string;
  products: Array<{
    name: string;
    image: string;
    meta: string;
    price: string;
    review?: boolean;
  }>;
};

export const accountOrders: AccountOrder[] = [
  {
    id: "ORD-2024-001",
    total: "$186.00",
    status: "Delivered",
    placed: "14/01/2024",
    address: "123 Main St, New York, NY 10001",
    tracking: "TRK123456789",
    products: [
      { name: "Premium Cotton T-Shirt", image: premiumImage, meta: "Size: M • Color: Black • Qty: 2", price: "$29", review: true },
      { name: "Designer Jeans", image: jeansImage, meta: "Size: 32 • Color: Dark Blue • Qty: 1", price: "$79", review: true },
    ],
  },
  {
    id: "ORD-2024-002",
    total: "$120.00",
    status: "Shipped",
    placed: "09/01/2024",
    address: "123 Main St, New York, NY 10001",
    tracking: "TRK987654321",
    products: [
      { name: "Cashmere Sweater", image: cashmereImage, meta: "Size: L • Color: Navy • Qty: 1", price: "$120" },
    ],
  },
  {
    id: "ORD-2024-003",
    total: "$89.99",
    status: "Processing",
    placed: "04/01/2024",
    address: "123 Main St, New York, NY 10001",
    products: [
      { name: "Athletic Sneakers", image: sneakersImage, meta: "Size: 10 • Color: White • Qty: 1", price: "$89.99" },
    ],
  },
];
