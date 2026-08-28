import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "style-wishlist-items";
const DEFAULT_ITEMS = ["sale-1", "sale-4", "sale-6"];

type WishlistContextValue = {
  favoriteKeys: string[];
  isFavorite: (key: string) => boolean;
  toggleFavorite: (key: string) => void;
};

const WishlistContext = createContext<WishlistContextValue | undefined>(undefined);

function getInitialFavorites() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return DEFAULT_ITEMS;

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : DEFAULT_ITEMS;
  } catch {
    return DEFAULT_ITEMS;
  }
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [favoriteKeys, setFavoriteKeys] = useState<string[]>(getInitialFavorites);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteKeys));
  }, [favoriteKeys]);

  const value = useMemo<WishlistContextValue>(
    () => ({
      favoriteKeys,
      isFavorite: (key) => favoriteKeys.includes(key),
      toggleFavorite: (key) => {
        setFavoriteKeys((current) =>
          current.includes(key) ? current.filter((item) => item !== key) : [...current, key],
        );
      },
    }),
    [favoriteKeys],
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used within WishlistProvider");
  return context;
}
