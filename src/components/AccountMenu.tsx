import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProfileIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <circle cx="12" cy="7" r="3.25" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 20v-2.2A5.7 5.7 0 0 1 11.2 12h1.6a5.7 5.7 0 0 1 5.7 5.8V20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function OrdersIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path d="m4.5 7.3 7.5-4 7.5 4v9.4l-7.5 4-7.5-4z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m4.8 7.5 7.2 4 7.2-4M12 11.5v9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path d="M20.6 5.8a5.2 5.2 0 0 0-7.4 0L12 7l-1.2-1.2a5.2 5.2 0 0 0-7.4 7.4L12 21l8.6-7.8a5.2 5.2 0 0 0 0-7.4Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M19.4 13.5a7.7 7.7 0 0 0 .1-3l2-1.5-2-3.4-2.5 1a8.6 8.6 0 0 0-2.6-1.5L14 2.5h-4l-.4 2.6A8.6 8.6 0 0 0 7 6.6l-2.5-1-2 3.4 2 1.5a7.7 7.7 0 0 0 .1 3l-2.1 1.6 2 3.4 2.6-1a8.2 8.2 0 0 0 2.5 1.4l.4 2.6h4l.4-2.6a8.2 8.2 0 0 0 2.5-1.4l2.6 1 2-3.4z" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
    </svg>
  );
}

function SignOutIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path d="M10 4H5.5A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20H10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 8l4 4-4 4M8.5 12H18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AccountMenu({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  if (!user) {
    return null;
  }

  const handleSignOut = () => {
    signOut();
    onClose();
    navigate("/login");
  };

  const items = [
    { label: "Profile", icon: <ProfileIcon />, to: "/profile" },
    { label: "Orders", icon: <OrdersIcon />, to: "/orders" },
    { label: "Wishlist", icon: <HeartIcon />, to: "/wishlist" },
    { label: "Settings", icon: <SettingsIcon />, to: "/settings" },
  ];

  return (
    <div className="w-[285px] overflow-hidden rounded-[14px] border border-[#E5E7EB] bg-white text-[#030711] shadow-[0_12px_32px_rgba(3,7,17,0.18)]">
      <div className="px-6 py-5">
        <p className="text-[20px] font-semibold leading-7">{user.name}</p>
        <p className="mt-1 truncate text-[15px] leading-5 text-[#6B7280]">{user.email}</p>
      </div>

      <div className="border-t border-[#E5E7EB] px-3 py-2">
        {items.map((item) =>
          item.to ? (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                onClose();
                navigate(item.to);
              }}
              className="flex h-12 w-full items-center gap-4 rounded-[9px] px-3 text-left text-[17px]"
            >
              <span className="grid h-7 w-7 place-items-center">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ) : (
            <div key={item.label} className="flex h-12 items-center gap-4 rounded-[9px] px-3 text-[17px]">
              <span className="grid h-7 w-7 place-items-center">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ),
        )}
      </div>

      <div className="border-t border-[#E5E7EB] p-3">
        <button
          type="button"
          onClick={handleSignOut}
          className="flex h-12 w-full items-center gap-4 rounded-[9px] px-3 text-left text-[17px]"
        >
          <span className="grid h-7 w-7 place-items-center"><SignOutIcon /></span>
          <span>Sign out</span>
        </button>
      </div>
    </div>
  );
}
