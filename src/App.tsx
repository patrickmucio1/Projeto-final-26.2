import { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SalePage } from "./pages/SalePage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { ProductPage } from "./pages/ProductPage";
import { WishlistPage } from "./pages/WishlistPage";
import { CartPage } from "./pages/CartPage";
import { CheckoutShippingPage } from "./pages/CheckoutShippingPage";
import { CheckoutPaymentPage } from "./pages/CheckoutPaymentPage";
import { CheckoutReviewPage } from "./pages/CheckoutReviewPage";
import { OrderConfirmedPage } from "./pages/OrderConfirmedPage";
import { ProfilePage } from "./pages/ProfilePage";
import { OrdersPage } from "./pages/OrdersPage";
import { SettingsPage } from "./pages/SettingsPage";
import { useAuth } from "./context/AuthContext";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/sale"
        element={
          <ProtectedRoute>
            <SalePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/product/premium-cotton-t-shirt"
        element={
          <ProtectedRoute>
            <ProductPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <WishlistPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/checkout/shipping"
        element={
          <ProtectedRoute>
            <CheckoutShippingPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/checkout/payment"
        element={
          <ProtectedRoute>
            <CheckoutPaymentPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/checkout/review"
        element={
          <ProtectedRoute>
            <CheckoutReviewPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/order-confirmed"
        element={
          <ProtectedRoute>
            <OrderConfirmedPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <OrdersPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
