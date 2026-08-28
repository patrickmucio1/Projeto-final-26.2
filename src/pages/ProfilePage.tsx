import { FormEvent, useMemo, useState } from "react";
import { AccountPageShell } from "../components/AccountPageShell";
import { BoxIcon, CalendarIcon, HeartOutlineIcon, PencilIcon, StarOutlineIcon } from "../components/ProfileIcons";
import { useAuth } from "../context/AuthContext";

export function ProfilePage() {
  const { user, updateProfile } = useAuth();
  const initial = useMemo(() => ({
    firstName: user?.firstName || "John",
    lastName: user?.lastName || "Doe",
    email: user?.email || "john.doe@example.com",
    phone: user?.phone || "+1 (555) 123-4567",
    dateOfBirth: user?.dateOfBirth || "15/01/1990",
    gender: user?.gender || "Male",
  }), [user]);
  const [form, setForm] = useState(initial);

  const setField = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));

  const save = (event: FormEvent) => {
    event.preventDefault();
    updateProfile(form);
  };

  const reset = () => setForm(initial);

  return (
    <AccountPageShell active="profile">
      <form onSubmit={save} className="rounded-[12px] border border-[#D8DCE3] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] md:p-6">
        <div className="flex items-start justify-between gap-4">
          <h2 className="max-w-[210px] text-[29px] font-semibold leading-[0.95] md:max-w-none md:text-[23px] md:leading-tight">Personal Information</h2>
          <button type="button" onClick={reset} className="flex h-12 items-center gap-3 rounded-[10px] border border-[#D8DCE3] px-5 text-[15px] font-medium md:h-10 md:px-4 md:text-[12px]"><PencilIcon className="h-5 w-5" /> Cancel</button>
        </div>

        <div className="mt-9 grid gap-7 md:grid-cols-2 md:gap-x-6 md:gap-y-6">
          <Field label="First Name"><input value={form.firstName} onChange={(e) => setField("firstName", e.target.value)} /></Field>
          <Field label="Last Name"><input value={form.lastName} onChange={(e) => setField("lastName", e.target.value)} /></Field>
          <Field label="Email"><input type="email" value={form.email} onChange={(e) => setField("email", e.target.value)} /></Field>
          <Field label="Phone"><input value={form.phone} onChange={(e) => setField("phone", e.target.value)} /></Field>
          <Field label="Date of Birth">
            <div className="relative"><input value={form.dateOfBirth} onChange={(e) => setField("dateOfBirth", e.target.value)} className="pr-12"/><CalendarIcon className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2" /></div>
          </Field>
          <Field label="Gender"><select value={form.gender} onChange={(e) => setField("gender", e.target.value)}><option>Male</option><option>Female</option><option>Other</option><option>Prefer not to say</option></select></Field>
        </div>

        <div className="mt-8 flex gap-4">
          <button type="submit" className="h-12 rounded-[10px] bg-[#030711] px-6 text-[15px] font-medium text-white md:h-10 md:text-[12px]">Save Changes</button>
          <button type="button" onClick={reset} className="h-12 rounded-[10px] border border-[#D8DCE3] px-6 text-[15px] font-medium md:h-10 md:text-[12px]">Cancel</button>
        </div>
      </form>

      <section className="mt-7 grid gap-7 md:grid-cols-3 md:gap-6">
        <StatCard icon={<BoxIcon className="h-10 w-10" />} value="3" label="Total Orders" />
        <StatCard icon={<HeartOutlineIcon className="h-10 w-10 text-[#EF4444]" />} value="3" label="Wishlist Items" />
        <StatCard icon={<StarOutlineIcon className="h-10 w-10 text-[#EAB308]" />} value="4.8" label="Avg. Rating" />
      </section>
    </AccountPageShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block text-[16px] font-medium md:text-[13px]"><span>{label}</span><div className="mt-3 [&_input]:h-[54px] [&_input]:w-full [&_input]:rounded-[10px] [&_input]:border [&_input]:border-[#D8DCE3] [&_input]:px-4 [&_input]:text-[16px] [&_input]:outline-none [&_select]:h-[54px] [&_select]:w-full [&_select]:rounded-[10px] [&_select]:border [&_select]:border-[#D8DCE3] [&_select]:bg-white [&_select]:px-4 [&_select]:text-[16px] [&_select]:outline-none md:[&_input]:h-10 md:[&_input]:text-[13px] md:[&_select]:h-10 md:[&_select]:text-[13px]">{children}</div></label>;
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return <article className="grid min-h-[185px] place-items-center rounded-[12px] border border-[#D8DCE3] bg-white p-5 text-center md:min-h-[142px]"><div><div className="mx-auto grid place-items-center">{icon}</div><strong className="mt-4 block text-[30px] leading-none md:text-[22px]">{value}</strong><span className="mt-3 block text-[17px] text-[#7B8494] md:text-[13px]">{label}</span></div></article>;
}
