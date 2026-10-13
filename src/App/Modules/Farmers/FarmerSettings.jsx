import { useState } from "react";
import { useTheme } from "../../../context/ThemeContext";
import ThemeToggle from "../Users/ThemeToggle";

const UserIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
  </svg>
);
const PaletteIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2a10 10 0 0 0 0 20c1.4 0 2.5-1.1 2.5-2.5 0-.6-.2-1.2-.6-1.6-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2H17a5 5 0 0 0 5-5 10 10 0 0 0-10-9.5z" />
  </svg>
);
const BellIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" />
  </svg>
);
const ShieldIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 4 5v6c0 5.5 3.4 9.7 8 11 4.6-1.3 8-5.5 8-11V5z" /><path d="m9 12 2 2 4-4" />
  </svg>
);
const ChevronRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 6 6 6-6 6" />
  </svg>
);
const SproutIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V10" /><path d="M12 10C12 6 9 3 4 3c0 5 3 7 8 7Z" />
    <path d="M12 13c0-3.5 2.5-6 7-6 0 4.5-3 6-7 6Z" />
  </svg>
);
const MapPinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const WalletIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 12V8a2 2 0 0 0-2-2H4a2 2 0 0 0 0 4h16v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6" />
    <circle cx="16" cy="12" r="1" fill="currentColor" />
  </svg>
);
const FileIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>
);
const IdIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <circle cx="8" cy="12" r="2" />
    <path d="M14 10h5M14 14h3M5 15c.5-1 1.5-1.5 3-1.5s2.5.5 3 1.5" />
  </svg>
);

const Toggle = ({ checked, onChange }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    onClick={() => onChange(!checked)}
    className={`relative inline-flex items-center w-[44px] h-6 rounded-full transition-colors flex-shrink-0 ${
      checked ? "bg-[var(--brand)]" : "bg-[var(--surface-3)] border border-[var(--border)]"
    }`}
  >
    <span className={`absolute top-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full bg-white shadow-sm transition-all duration-200 ${
      checked ? "left-[23px]" : "left-[3px]"
    }`} />
  </button>
);

const Section = ({ title, subtitle, children }) => (
  <section className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden">
    <div className="px-5 sm:px-6 py-4 border-b border-[var(--border)]">
      <h2 className="font-display font-bold text-[15px] text-[var(--text)]">{title}</h2>
      {subtitle && <p className="text-[12.5px] text-[var(--text-dim)] mt-0.5">{subtitle}</p>}
    </div>
    <div className="divide-y divide-[var(--border)]">{children}</div>
  </section>
);

const Row = ({ icon, title, desc, action, onClick }) => {
  const Wrapper = onClick ? "button" : "div";
  return (
    <Wrapper
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-5 sm:px-6 py-4 text-left ${
        onClick ? "hover:bg-[var(--surface-2)] transition-colors" : ""
      }`}
    >
      {icon && (
        <span className="w-10 h-10 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] flex-shrink-0">
          {icon}
        </span>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-[13.5px] font-semibold text-[var(--text)]">{title}</p>
        {desc && <p className="text-[12px] text-[var(--text-dim)] mt-0.5 leading-relaxed">{desc}</p>}
      </div>
      <div className="flex-shrink-0">{action}</div>
    </Wrapper>
  );
};

const FarmerSettings = () => {
  const { theme } = useTheme();
  const [notif, setNotif] = useState({ newOrders: true, sms: true, push: true, priceAlerts: false });
  const [prefs, setPrefs] = useState({ autoConfirm: false, weekends: true, wholesale: true, delivery: true });

  return (
    <div className="font-body max-w-3xl">
      <div className="mb-6">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">Settings</h1>
        <p className="text-[13.5px] text-[var(--text-muted)] mt-1">Manage your farm profile and selling preferences</p>
      </div>

      <div className="space-y-5">
        <Section title="Profile" subtitle="Your farmer account">
          <div className="flex items-center gap-4 px-5 sm:px-6 py-5">
            <div className="w-16 h-16 rounded-full bg-[var(--brand)] flex items-center justify-center text-[var(--brand-fg)] font-display font-bold text-xl flex-shrink-0">
              WK
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[15px] text-[var(--text)]">Wanjiru Kamau</p>
              <p className="text-[12.5px] text-[var(--text-dim)] mt-0.5">wanjiru@kiambufresh.co.ke</p>
              <p className="text-[12px] text-[var(--text-muted)] mt-1">+254 712 345 678</p>
            </div>
            <button className="hidden sm:inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[var(--accent-fg)] hover:underline">
              Edit
            </button>
          </div>
          <Row
            icon={<IdIcon className="w-5 h-5" />}
            title="Verification"
            desc="National ID + farm location verified"
            action={
              <span className="text-[11.5px] font-bold uppercase tracking-wider text-[var(--accent-fg)] bg-[var(--accent-soft)] px-2.5 py-1 rounded-full">
                Verified
              </span>
            }
          />
        </Section>

        <Section title="Farm details" subtitle="Information buyers see about your farm">
          <Row
            icon={<SproutIcon className="w-5 h-5" />}
            title="Kiambu Fresh Farms"
            desc="Est. 2018 · 12 acres · Fruits, Vegetables, Dairy"
            action={<ChevronRightIcon className="w-4 h-4 text-[var(--text-dim)]" />}
            onClick={() => {}}
          />
          <Row
            icon={<MapPinIcon className="w-5 h-5" />}
            title="Farm location"
            desc="Kiambu Town, Kiambu County"
            action={<ChevronRightIcon className="w-4 h-4 text-[var(--text-dim)]" />}
            onClick={() => {}}
          />
          <Row
            icon={<FileIcon className="w-5 h-5" />}
            title="Farm documents"
            desc="Land title, organic certification, health permits"
            action={<ChevronRightIcon className="w-4 h-4 text-[var(--text-dim)]" />}
            onClick={() => {}}
          />
        </Section>

        <Section title="Selling preferences" subtitle="Control how orders reach you">
          <Row
            title="Auto-confirm small orders"
            desc="Orders under KES 2,000 are confirmed automatically"
            action={<Toggle checked={prefs.autoConfirm} onChange={(v) => setPrefs({ ...prefs, autoConfirm: v })} />}
          />
          <Row
            title="Weekend availability"
            desc="Accept orders on Saturday and Sunday"
            action={<Toggle checked={prefs.weekends} onChange={(v) => setPrefs({ ...prefs, weekends: v })} />}
          />
          <Row
            title="Wholesale enquiries"
            desc="Allow buyers to request bulk quotes"
            action={<Toggle checked={prefs.wholesale} onChange={(v) => setPrefs({ ...prefs, wholesale: v })} />}
          />
          <Row
            title="AgriSoko delivery"
            desc="Let us assign riders for your deliveries"
            action={<Toggle checked={prefs.delivery} onChange={(v) => setPrefs({ ...prefs, delivery: v })} />}
          />
        </Section>

        <Section title="Appearance" subtitle="Customize how AgriSoko looks">
          <Row
            icon={<PaletteIcon className="w-5 h-5" />}
            title="Theme"
            desc={`Currently using ${theme === "dark" ? "dark" : "light"} mode`}
            action={<ThemeToggle variant="pill" />}
          />
        </Section>

        <Section title="Notifications" subtitle="Choose what updates you receive">
          <Row
            title="New order alerts"
            desc="Get notified the moment a buyer places an order"
            action={<Toggle checked={notif.newOrders} onChange={(v) => setNotif({ ...notif, newOrders: v })} />}
          />
          <Row
            title="SMS notifications"
            desc="Receive order and payout confirmations via SMS"
            action={<Toggle checked={notif.sms} onChange={(v) => setNotif({ ...notif, sms: v })} />}
          />
          <Row
            title="Push notifications"
            desc="Real-time alerts on your device"
            action={<Toggle checked={notif.push} onChange={(v) => setNotif({ ...notif, push: v })} />}
          />
          <Row
            title="Price alerts"
            desc="Weekly market price updates for your crops"
            action={<Toggle checked={notif.priceAlerts} onChange={(v) => setNotif({ ...notif, priceAlerts: v })} />}
          />
        </Section>

        <Section title="Payouts" subtitle="How and when you get paid">
          <Row
            icon={<WalletIcon className="w-5 h-5" />}
            title="M-Pesa payout account"
            desc="+254 712 345 678 · Settlements every Friday"
            action={<ChevronRightIcon className="w-4 h-4 text-[var(--text-dim)]" />}
            onClick={() => {}}
          />
          <Row
            icon={<FileIcon className="w-5 h-5" />}
            title="Tax documents"
            desc="Download your monthly and annual statements"
            action={<ChevronRightIcon className="w-4 h-4 text-[var(--text-dim)]" />}
            onClick={() => {}}
          />
        </Section>

        <Section title="Security" subtitle="Keep your account safe">
          <Row
            icon={<ShieldIcon className="w-5 h-5" />}
            title="Change password"
            desc="Last updated 3 months ago"
            action={<ChevronRightIcon className="w-4 h-4 text-[var(--text-dim)]" />}
            onClick={() => {}}
          />
          <Row
            icon={<UserIcon className="w-5 h-5" />}
            title="Two-factor authentication"
            desc="Add an extra layer of security at sign-in"
            action={
              <span className="text-[11.5px] font-bold uppercase tracking-wider text-[var(--accent-fg)] bg-[var(--accent-soft)] px-2.5 py-1 rounded-full">
                Enable
              </span>
            }
            onClick={() => {}}
          />
          <Row
            icon={<BellIcon className="w-5 h-5" />}
            title="Active sessions"
            desc="Manage devices signed into your account"
            action={<ChevronRightIcon className="w-4 h-4 text-[var(--text-dim)]" />}
            onClick={() => {}}
          />
        </Section>

        <section className="bg-[var(--surface)] border border-[var(--danger)]/25 rounded-3xl overflow-hidden">
          <div className="px-5 sm:px-6 py-4 border-b border-[var(--danger)]/15">
            <h2 className="font-display font-bold text-[15px] text-[var(--danger)]">Danger zone</h2>
            <p className="text-[12.5px] text-[var(--text-dim)] mt-0.5">These actions cannot be undone</p>
          </div>
          <div className="px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="text-[13.5px] font-semibold text-[var(--text)]">Pause farm listings</p>
              <p className="text-[12px] text-[var(--text-dim)] mt-0.5">Temporarily hide all products from the marketplace</p>
            </div>
            <button className="text-[12.5px] font-semibold text-[var(--text)] border border-[var(--border-strong)] hover:bg-[var(--surface-2)] px-4 py-2 rounded-full transition-colors flex-shrink-0 self-start sm:self-auto">
              Pause
            </button>
          </div>
          <div className="px-5 sm:px-6 py-4 border-t border-[var(--danger)]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="text-[13.5px] font-semibold text-[var(--text)]">Delete account</p>
              <p className="text-[12px] text-[var(--text-dim)] mt-0.5">Permanently remove your account and all listing history</p>
            </div>
            <button className="text-[12.5px] font-semibold text-[var(--danger)] border border-[var(--danger)]/30 hover:bg-[var(--danger-soft)] px-4 py-2 rounded-full transition-colors flex-shrink-0 self-start sm:self-auto">
              Delete
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FarmerSettings;