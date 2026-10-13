const GUIDES = [
  { emoji: "🌱", title: "Getting started on AgriSoko", desc: "Everything you need to list your first product and get your first order.", read: "5 min" },
  { emoji: "📸", title: "Taking great product photos",  desc: "Simple tips for snapping photos that make buyers click.",                  read: "4 min" },
  { emoji: "💰", title: "Pricing your harvest",          desc: "How to set fair prices that attract buyers without under-selling.",         read: "6 min" },
  { emoji: "📦", title: "Packaging for delivery",        desc: "Protect your produce in transit and reduce damage claims.",                read: "5 min" },
  { emoji: "💳", title: "Getting paid",                  desc: "How escrow works and when your M-Pesa payouts land.",                      read: "3 min" },
  { emoji: "📈", title: "Growing your sales",            desc: "Marketing tips to build a repeat-buyer base on AgriSoko.",                 read: "7 min" },
  { emoji: "🌾", title: "Post-harvest handling",         desc: "Drying, grading and storing to keep your produce premium quality.",        read: "8 min" },
  { emoji: "🤝", title: "Handling buyer disputes",       desc: "How to respond to complaints professionally and protect your rating.",     read: "4 min" },
  { emoji: "📊", title: "Reading your dashboard",        desc: "Understanding your metrics and using data to improve.",                    read: "5 min" },
];

const FarmerGuides = () => (
  <div className="font-body">
    <div className="mb-6">
      <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
        Farmer Guides
      </h1>
      <p className="text-[13.5px] text-[var(--text-muted)] mt-1">
        Learn how to sell more, waste less and grow your farm business
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {GUIDES.map((g) => (
        <button
          key={g.title}
          className="text-left bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 hover:border-[var(--border-strong)] hover:-translate-y-0.5 transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <span className="w-12 h-12 rounded-2xl bg-[var(--accent-soft)] flex items-center justify-center text-2xl">
              {g.emoji}
            </span>
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--text-dim)] bg-[var(--surface-2)] px-2 py-1 rounded-full border border-[var(--border)]">
              {g.read}
            </span>
          </div>
          <p className="font-display font-bold text-[15px] text-[var(--text)] leading-tight">{g.title}</p>
          <p className="text-[12.5px] text-[var(--text-muted)] mt-2 leading-relaxed">{g.desc}</p>
        </button>
      ))}
    </div>
  </div>
);

export default FarmerGuides;