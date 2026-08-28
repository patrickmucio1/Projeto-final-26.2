import { useState } from "react";
import { AccountPageShell } from "../components/AccountPageShell";
import { BellIcon, ShieldIcon } from "../components/ProfileIcons";

type PreferenceKey = "email" | "sms" | "marketing" | "orders" | "arrivals" | "sales";

const preferenceRows: Array<{ key: PreferenceKey; title: string; subtitle: string }> = [
  { key: "email", title: "Email Notifications", subtitle: "Receive notifications via email" },
  { key: "sms", title: "SMS Notifications", subtitle: "Receive notifications via text message" },
  { key: "marketing", title: "Marketing Emails", subtitle: "Receive promotional emails and offers" },
  { key: "orders", title: "Order Updates", subtitle: "Get notified about order status changes" },
  { key: "arrivals", title: "New Arrivals", subtitle: "Be the first to know about new products" },
  { key: "sales", title: "Sales Alerts", subtitle: "Get notified about sales and discounts" },
];

export function SettingsPage() {
  const [preferences, setPreferences] = useState<Record<PreferenceKey, boolean>>({ email: true, sms: false, marketing: true, orders: true, arrivals: false, sales: true });

  return (
    <AccountPageShell active="settings">
      <section className="rounded-[13px] border border-[#D8DCE3] bg-white p-6 md:p-6">
        <h2 className="flex items-center gap-3 text-[30px] font-semibold md:text-[23px]"><BellIcon className="h-7 w-7 md:h-6 md:w-6" /> Notification Preferences</h2>
        <div className="mt-8 space-y-7 md:mt-7 md:space-y-6">
          {preferenceRows.map((row) => (
            <div key={row.key} className="flex items-center justify-between gap-4">
              <div><h3 className="text-[18px] font-medium md:text-[15px]">{row.title}</h3><p className="mt-1 text-[15px] text-[#7B8494] md:text-[12px]">{row.subtitle}</p></div>
              <button type="button" role="switch" aria-checked={preferences[row.key]} onClick={() => setPreferences((current) => ({ ...current, [row.key]: !current[row.key] }))} className={`relative h-8 w-14 shrink-0 rounded-full transition-colors md:h-6 md:w-11 ${preferences[row.key] ? "bg-[#030711]" : "bg-[#E5E7EB]"}`}><span className={`absolute top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-white shadow transition-all md:h-4 md:w-4 ${preferences[row.key] ? "left-[28px] md:left-[24px]" : "left-1"}`} /></button>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-7 rounded-[13px] border border-[#D8DCE3] bg-white p-6 md:p-6">
        <h2 className="flex items-center gap-3 text-[30px] font-semibold md:text-[23px]"><ShieldIcon className="h-7 w-7 md:h-6 md:w-6" /> Account Security</h2>
        <div className="mt-8 divide-y divide-[#E5E7EB] md:mt-7">
          <div className="flex items-center justify-between gap-4 pb-7 md:pb-5">
            <div><h3 className="text-[18px] font-medium md:text-[15px]">Change Password</h3><p className="mt-1 max-w-[190px] text-[15px] leading-snug text-[#7B8494] md:max-w-none md:text-[12px]">Update your account password</p></div>
            <button type="button" className="h-12 shrink-0 rounded-[10px] border border-[#D8DCE3] px-5 text-[15px] font-medium md:h-10 md:text-[12px]">Update Password</button>
          </div>
          <div className="flex items-center justify-between gap-4 pt-7 md:pt-5">
            <div><h3 className="text-[18px] font-medium text-[#DC2626] md:text-[15px]">Delete Account</h3><p className="mt-1 max-w-[210px] text-[15px] leading-snug text-[#7B8494] md:max-w-none md:text-[12px]">Permanently delete your account and data</p></div>
            <button type="button" className="h-12 shrink-0 rounded-[10px] bg-[#EF4444] px-6 text-[15px] font-medium text-white md:h-10 md:text-[12px]">Delete Account</button>
          </div>
        </div>
      </section>
    </AccountPageShell>
  );
}
