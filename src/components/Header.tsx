import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../assets/Component 2-11.svg";
import heartIcon from "../assets/Component 2-10.svg";
import bagIcon from "../assets/Component 2-9.svg";
import hamburgerIcon from "../assets/hamburger-menu.png";
import accountIcon from "../assets/login/account.png";
import { AccountMenu } from "./AccountMenu";
import { useAuth } from "../context/AuthContext";

const navItems = [
  { label: "New In", to: "/home#featured" },
  { label: "Women", to: "/home#categories" },
  { label: "Men", to: "/home#categories" },
  { label: "Sale", to: "/sale" },
];

type HeaderProps = {
  accountMode?: "avatar" | "icon";
  authHeader?: boolean;
};

export function Header({ accountMode = "avatar", authHeader = false }: HeaderProps) {
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const interactiveAvatar = accountMode === "avatar" && isAuthenticated && !authHeader;
  const avatarText = interactiveAvatar && user ? user.initials : "JD";
  const homeTarget = accountMode === "icon" || authHeader ? "/login" : "/home";

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <div
        className={
          accountMode === "icon" || authHeader
            ? "h-[34px] bg-[#030711] px-2 text-center text-[11px] leading-[34px] text-white md:h-9 md:px-4 md:text-[12px] md:leading-9"
            : "h-[18px] bg-[#030711] px-2 text-center text-[7px] leading-[18px] text-white md:h-9 md:px-4 md:text-[12px] md:leading-9"
        }
      >
        Free shipping on orders over $100 | New arrivals daily
      </div>

      <header className="relative z-30 bg-white md:sticky md:top-0 md:z-50 md:bg-white/70 md:backdrop-blur-xl">
        <div className="border-b border-[#E5E7EB]">
        {accountMode === "icon" ? (
          <div className="mx-auto flex h-[64px] w-full items-center px-6 md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="grid h-6 w-6 shrink-0 place-items-center"
            >
              <img src={hamburgerIcon} alt="" className="h-6 w-6 object-contain" />
            </button>

            <Link to={homeTarget} className="ml-6 flex w-[98px] shrink-0 items-center gap-[9px]" aria-label="STYLE home">
              <span
                aria-hidden="true"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-[12px] bg-[#030711] text-[20px] font-bold leading-7 text-white"
              >
                S
              </span>
              <span className="h-7 w-[57px] text-[20px] font-bold leading-7 text-[#030711]">STYLE</span>
            </Link>

            <div className="ml-7 flex shrink-0 items-center gap-6">
              <button
                type="button"
                aria-label="Search"
                aria-expanded={mobileSearchOpen}
                onClick={() => setMobileSearchOpen((value) => !value)}
                className="grid h-6 w-6 shrink-0 place-items-center"
              >
                <img src={searchIcon} alt="" className="h-6 w-6" />
              </button>

              <Link to={isAuthenticated ? "/wishlist" : "/login"} aria-label="Wishlist" className="grid h-6 w-6 shrink-0 place-items-center">
                <img src={heartIcon} alt="" className="h-6 w-6" />
              </Link>

              <span className="grid h-6 w-6 shrink-0 place-items-center" aria-label="Account">
                <img src={accountIcon} alt="" className="h-6 w-6 object-contain" />
              </span>

              <Link to={isAuthenticated ? "/cart" : "/login"} aria-label="Shopping bag" className="relative grid h-6 w-6 shrink-0 place-items-center">
                <img src={bagIcon} alt="" className="h-6 w-6" />
                <span className="absolute -right-[8px] -top-[9px] grid h-5 min-w-5 place-items-center rounded-full bg-[#030711] px-1 text-[10px] font-semibold text-white">
                  2
                </span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="mx-auto flex h-[65px] w-full items-center justify-between px-6 md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="grid h-6 w-6 shrink-0 place-items-center"
            >
              <img src={hamburgerIcon} alt="" className="h-6 w-6 object-contain" />
            </button>

            <Link to={homeTarget} className="flex shrink-0 items-center gap-[9px]" aria-label="STYLE home">
              <span
                aria-hidden="true"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-[12px] bg-[#030711] text-[20px] font-bold leading-7 text-white"
              >
                S
              </span>
              <span className="h-7 w-[57px] text-[20px] font-bold leading-7 text-[#030711]">STYLE</span>
            </Link>

            <button
              type="button"
              aria-label="Search"
              aria-expanded={mobileSearchOpen}
              onClick={() => setMobileSearchOpen((value) => !value)}
              className="grid h-6 w-6 shrink-0 place-items-center"
            >
              <img src={searchIcon} alt="" className="h-6 w-6" />
            </button>

            <Link to={isAuthenticated ? "/wishlist" : "/login"} aria-label="Wishlist" className="grid h-6 w-6 shrink-0 place-items-center">
              <img src={heartIcon} alt="" className="h-6 w-6" />
            </Link>

            {interactiveAvatar ? (
              <div className="relative shrink-0">
                <button
                  type="button"
                  aria-label="Open account menu"
                  aria-expanded={accountMenuOpen}
                  onClick={() => setAccountMenuOpen((value) => !value)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-[#F3F4F6] text-[12px] font-semibold text-[#030711]"
                >
                  {avatarText}
                </button>
                {accountMenuOpen && (
                  <div className="absolute right-[-50px] top-[50px] z-50">
                    <AccountMenu onClose={() => setAccountMenuOpen(false)} />
                  </div>
                )}
              </div>
            ) : (
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F3F4F6] text-[12px] font-semibold text-[#030711]">
                {avatarText}
              </div>
            )}

            <Link to={isAuthenticated ? "/cart" : "/login"} aria-label="Shopping bag" className="relative grid h-6 w-6 shrink-0 place-items-center">
              <img src={bagIcon} alt="" className="h-6 w-6" />
              <span className="absolute -right-[8px] -top-[9px] grid h-5 min-w-5 place-items-center rounded-full bg-[#030711] px-1 text-[10px] font-semibold text-white">
                2
              </span>
            </Link>
          </div>
        )}

        {mobileSearchOpen && (
          <form onSubmit={handleSearch} className="mx-5 mb-3 flex items-center rounded-[9px] border border-[#D1D5DB] bg-[#FAFAFA] px-3 md:hidden">
            <img src={searchIcon} alt="" className="mr-2 h-4 w-4" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search for products..."
              className="h-10 w-full bg-transparent text-[13px] text-[#030711] outline-none placeholder:text-[#9CA3AF]"
              aria-label="Search products"
            />
          </form>
        )}

        {mobileMenuOpen && (
          <nav className="grid border-t border-[#F3F4F6] bg-white px-6 py-3 text-[13px] font-medium md:hidden" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        <div className="mx-auto hidden h-[78px] max-w-[1376px] items-center gap-6 px-8 md:flex">
          <Link to={homeTarget} className="flex shrink-0 items-center gap-2" aria-label="STYLE home">
            <span
              aria-hidden="true"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-[12px] bg-[#030711] text-[20px] font-bold leading-7 text-white"
            >
              S
            </span>
            <span className="h-7 w-[57px] text-[20px] font-bold leading-7 text-[#030711]">STYLE</span>
          </Link>

          <nav className="flex items-center gap-9 text-[13px] font-medium" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.label} to={item.to} className="transition-opacity hover:opacity-60">
                {item.label}
              </Link>
            ))}
          </nav>

          <form onSubmit={handleSearch} className="mx-auto flex w-full max-w-[390px] items-center rounded-[9px] border border-[#D1D5DB] bg-[#FAFAFA] px-3">
            <img src={searchIcon} alt="" className="mr-2 h-4 w-4" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search for products..."
              className="h-10 w-full bg-transparent text-[13px] text-[#030711] outline-none placeholder:text-[#9CA3AF]"
              aria-label="Search products"
            />
          </form>

          <div className="ml-auto flex shrink-0 items-center gap-5">
            <Link to={isAuthenticated ? "/wishlist" : "/login"} aria-label="Wishlist" className="grid h-8 w-8 place-items-center">
              <img src={heartIcon} alt="" className="h-[18px] w-[18px]" />
            </Link>
            {accountMode === "avatar" ? (
              interactiveAvatar ? (
                <div className="relative">
                  <button
                    type="button"
                    aria-label="Open account menu"
                    aria-expanded={accountMenuOpen}
                    onClick={() => setAccountMenuOpen((value) => !value)}
                    className="grid h-10 w-10 place-items-center rounded-full bg-[#F3F4F6] text-[12px] font-semibold text-[#030711]"
                  >
                    {avatarText}
                  </button>
                  {accountMenuOpen && (
                    <div className="absolute right-0 top-[50px] z-50">
                      <AccountMenu onClose={() => setAccountMenuOpen(false)} />
                    </div>
                  )}
                </div>
              ) : (
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#F3F4F6] text-[12px] font-semibold">{avatarText}</div>
              )
            ) : (
              <span className="grid h-[18px] w-[18px] place-items-center" aria-label="Account">
                <img src={accountIcon} alt="" className="h-[18px] w-[18px] object-contain" />
              </span>
            )}
            <Link to={isAuthenticated ? "/cart" : "/login"} aria-label="Shopping bag" className="relative grid h-8 w-8 place-items-center">
              <img src={bagIcon} alt="" className="h-[18px] w-[18px]" />
              <span className="absolute -right-1 -top-1 grid h-[17px] min-w-[17px] place-items-center rounded-full bg-[#030711] px-1 text-[9px] text-white">2</span>
            </Link>
          </div>
        </div>
        </div>
      </header>
    </>
  );
}
