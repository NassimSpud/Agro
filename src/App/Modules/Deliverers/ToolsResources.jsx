const TOOLS = [
  { emoji: "🧮", name: "Fuel Calculator",   desc: "Estimate fuel costs per trip" },
  { emoji: "📊", name: "Earnings Report",   desc: "Weekly and monthly income summary" },
  { emoji: "🚦", name: "Traffic Updates",   desc: "Live road conditions in your area" },
  { emoji: "🧰", name: "Vehicle Checklist", desc: "Pre-trip safety checks" },
  { emoji: "📄", name: "Tax Documents",     desc: "Download your payout statements" },
  { emoji: "📞", name: "Dispatch Hotline",  desc: "24/7 support for emergencies" },
];

const ToolsResources = () => (
  <div className="font-body">
    <div className="mb-6">
      <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
        Tools & Resources
      </h1>
      <p className="text-[13.5px] text-[var(--text-muted)] mt-1">
        Everything you need to run your delivery business
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {TOOLS.map((t) => (
        <button
          key={t.name}
          className="text-left bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 hover:border-[var(--border-strong)] hover:-translate-y-0.5 transition-all"
        >
          <span className="w-12 h-12 rounded-2xl bg-[var(--accent-soft)] flex items-center justify-center text-2xl mb-4">
            {t.emoji}
          </span>
          <p className="font-display font-bold text-[15px] text-[var(--text)] leading-tight">{t.name}</p>
          <p className="text-[12.5px] text-[var(--text-muted)] mt-2 leading-relaxed">{t.desc}</p>
        </button>
      ))}
    </div>
  </div>
);

export default ToolsResources;