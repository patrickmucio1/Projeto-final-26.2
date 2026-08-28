import { MouseEvent, useState } from "react";
import { useWishlist } from "../context/WishlistContext";

type FavoriteButtonProps = {
  productKey: string;
  className?: string;
  iconClassName?: string;
  label?: string;
};

export function FavoriteButton({
  productKey,
  className = "grid h-10 w-10 place-items-center rounded-[10px] bg-white",
  iconClassName = "h-[18px] w-[18px]",
  label = "Favorite",
}: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useWishlist();
  const [popping, setPopping] = useState(false);
  const favorite = isFavorite(productKey);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    toggleFavorite(productKey);
    setPopping(true);
    window.setTimeout(() => setPopping(false), 260);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={favorite ? `Remove ${label} from wishlist` : `Add ${label} to wishlist`}
      aria-pressed={favorite}
      className={`${className} transition-transform duration-200 active:scale-90`}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`${iconClassName} transition-[transform,fill,stroke] duration-200 ${favorite ? "fill-[#EF4444] stroke-[#EF4444]" : "fill-none stroke-[#030711]"} ${popping ? "animate-[favorite-pop_260ms_ease-out]" : ""}`}
      >
        <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
