import { createContext, ReactNode, useContext, useMemo, useState } from "react";

export type ShippingMethod = "standard" | "express" | "overnight";

export type ShippingData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zip: string;
  shippingMethod: ShippingMethod;
  saveInfo: boolean;
};

export type PaymentData = {
  cardNumber: string;
  expiry: string;
  cvv: string;
  nameOnCard: string;
  billingSame: boolean;
};

type CheckoutContextValue = {
  shipping: ShippingData;
  payment: PaymentData;
  setShipping: (value: ShippingData) => void;
  setPayment: (value: PaymentData) => void;
};

const defaultShipping: ShippingData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  apartment: "",
  city: "",
  state: "",
  zip: "",
  shippingMethod: "standard",
  saveInfo: false,
};

const defaultPayment: PaymentData = {
  cardNumber: "",
  expiry: "",
  cvv: "",
  nameOnCard: "",
  billingSame: true,
};

const CheckoutContext = createContext<CheckoutContextValue | null>(null);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [shipping, setShippingState] = useState<ShippingData>(() => {
    const stored = sessionStorage.getItem("style-checkout-shipping");
    return stored ? (JSON.parse(stored) as ShippingData) : defaultShipping;
  });
  const [payment, setPaymentState] = useState<PaymentData>(() => {
    const stored = sessionStorage.getItem("style-checkout-payment");
    return stored ? (JSON.parse(stored) as PaymentData) : defaultPayment;
  });

  const setShipping = (value: ShippingData) => {
    sessionStorage.setItem("style-checkout-shipping", JSON.stringify(value));
    setShippingState(value);
  };

  const setPayment = (value: PaymentData) => {
    sessionStorage.setItem("style-checkout-payment", JSON.stringify(value));
    setPaymentState(value);
  };

  const value = useMemo(
    () => ({ shipping, payment, setShipping, setPayment }),
    [shipping, payment],
  );

  return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>;
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used inside CheckoutProvider");
  }
  return context;
}
