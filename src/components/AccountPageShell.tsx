import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { BoxIcon, GearIcon, PersonIcon } from "./ProfileIcons";
import { useAuth } from "../context/AuthContext";

type Section = "profile" | "orders" | "settings";

type AccountPageShellProps = {
  active: Section;
  children: ReactNode;
};

export function AccountPageShell({ active, children }: AccountPageShellProps) {
  const { user } = useAuth();
  const name = user?.name || "John Doe";
  const email = user?.email || "john.doe@example.com";
  const initials = user?.initials || "JD";
  const tabs = [
    { key: "profile" as const, label: "Profile", to: "/profile", icon: <PersonIcon /> },
    { key: "orders" as const, label: "Orders", to: "/orders", icon: <BoxIcon /> },
    { key: "settings" as const, label: "Settings", to: "/settings", icon: <GearIcon /> },
  ];

  return (
    <div className="min-h-screen bg-white text-[#030711]">
      <Header />
      <main className="mx-auto w-full max-w-[1376px] px-5 pb-20 pt-10 md:px-8 md:pt-11">
        <section className="flex items-center gap-5 md:gap-6">
          <div className="grid h-[100px] w-[100px] shrink-0 place-items-center rounded-full bg-[#F3F4F6] text-[23px] font-medium md:h-[80px] md:w-[80px] md:text-[18px]">
            {initials}
          </div>
          <div className="min-w-0">
            <h1 className="truncate text-[35px] font-bold leading-tight md:text-[31px]">{name}</h1>
            <p className="mt-1 truncate text-[20px] text-[#7B8494] md:text-[15px]">{email}</p>
            <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium md:mt-2 md:text-[11px]">
              <span className="rounded-full bg-[#F3F4F6] px-4 py-1 md:px-3">3 Orders</span>
              <span className="rounded-full bg-[#F3F4F6] px-4 py-1 md:px-3">Member since 2023</span>
            </div>
          </div>
        </section>

        <nav className="mt-11 grid h-[52px] grid-cols-3 rounded-[12px] bg-[#F3F4F6] p-1 md:mt-8 md:h-[40px]" aria-label="Account sections">
          {tabs.map((tab) => (
            <Link
              key={tab.key}
              to={tab.to}
              className={`flex items-center justify-center gap-2 rounded-[9px] text-[16px] font-medium md:text-[13px] ${active === tab.key ? "bg-white text-[#030711] shadow-sm" : "text-[#737C8C]"}`}
            >
              <span className="hidden md:block">{tab.icon}</span>
              {tab.label}
            </Link>
          ))}
        </nav>

        <div className="mt-4 md:mt-3">{children}</div>
      </main>
    </div>
  );
}
