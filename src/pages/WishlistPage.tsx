import { Link } from "react-router-dom";
import bagIcon from "../assets/Component 2-9.svg";
import { Header } from "../components/Header";
import { WishlistProductCard } from "../components/WishlistProductCard";
import { WishlistRecommendations } from "../components/WishlistRecommendations";
import { wishlistCatalog } from "../data/wishlistData";
import { useWishlist } from "../context/WishlistContext";

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="m14.5 6-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <circle cx="18" cy="5" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="6" cy="12" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="18" cy="19" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="m8 11 8-5M8 13l8 5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="M4 7h16M9 7V4h6v3m-8 0 1 13h8l1-13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 11v5M14 11v5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function WishlistPage() {
  const { favoriteKeys } = useWishlist();
  const savedItems = favoriteKeys
    .map((key) => wishlistCatalog.find((item) => item.key === key))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto w-full max-w-[1376px] px-4 md:px-8">
        <section className="pt-5 md:pt-10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 md:gap-5">
              <Link to="/home" aria-label="Back to home" className="mt-1 grid h-7 w-7 place-items-center rounded-full transition-colors hover:bg-[#F3F4F6]">
                <ArrowLeftIcon />
              </Link>
              <div>
                <h1 className="text-[22px] font-bold leading-tight md:text-[31px]">My Wishlist</h1>
                <p className="mt-1 text-[10px] text-[#6B7280] md:text-[13px]">{savedItems.length} {savedItems.length === 1 ? "item" : "items"} saved</p>
              </div>
            </div>

            <div className="flex h-9 items-center gap-2 rounded-[7px] border border-[#D1D5DB] bg-white px-3 text-[9px] font-medium md:h-10 md:px-4 md:text-[11px]">
              <ShareIcon />
              <span>Share</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 md:mt-8">
            <div className="flex h-9 items-center gap-2 rounded-[7px] border border-[#D1D5DB] bg-white px-4 text-[9px] font-medium md:h-10 md:text-[11px]">
              <img src={bagIcon} alt="" className="h-4 w-4" />
              Add All to Cart
            </div>
            <div className="flex h-9 items-center gap-2 rounded-[7px] border border-[#D1D5DB] bg-white px-4 text-[9px] font-medium md:h-10 md:text-[11px]">
              <TrashIcon />
              Clear Wishlist
            </div>
          </div>

          {savedItems.length > 0 ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:mt-9 md:grid-cols-[repeat(3,minmax(0,330px))] md:gap-6">
              {savedItems.map((item) => <WishlistProductCard key={item.key} item={item} />)}
            </div>
          ) : (
            <div className="mt-8 rounded-[12px] border border-[#E5E7EB] px-5 py-12 text-center text-[13px] text-[#6B7280]">Your wishlist is empty.</div>
          )}
        </section>

        <WishlistRecommendations />
      </main>
    </div>
  );
}
