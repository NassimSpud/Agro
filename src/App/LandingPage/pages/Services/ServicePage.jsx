import { Link } from "react-router-dom";
import PublicPageShell from "../PublicPageShell";

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ServicePage = ({ eyebrow, title, subtitle, hero, features, steps, cta }) => {
  return (
    <PublicPageShell>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-14">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-fg)] mb-4">
              <span className="w-6 h-px bg-[var(--accent-fg)]/40" />
              {eyebrow}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] tracking-[-0.02em] leading-[1.1]">
              {title}
            </h1>
            <p className="mt-5 text-[15.5px] sm:text-base text-[var(--text-muted)] leading-relaxed max-w-lg">
              {subtitle}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to={cta.to}
                className="inline-flex items-center gap-2 bg-[var(--brand)] text-[var(--brand-fg)] font-semibold text-sm px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                {cta.label}
                <ArrowRightIcon />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-[var(--border-strong)] text-[var(--text)] font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[var(--surface-2)] transition-colors"
              >
                All services
              </Link>
            </div>
          </div>

          <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-[var(--brand)] via-[var(--accent)] to-[var(--highlight)] overflow-hidden border-4 border-[var(--surface)] shadow-[0_30px_80px_-30px_rgba(20,60,35,0.4)] flex items-center justify-center">
            <span className="relative text-[100px] sm:text-[120px] drop-shadow-2xl">
              {hero.emoji}
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight mb-6">
          What you get
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 hover:border-[var(--border-strong)] transition-colors">
              <span className="w-11 h-11 rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-fg)] flex items-center justify-center text-lg flex-shrink-0">
                {f.icon}
              </span>
              <p className="font-display font-bold text-[15px] text-[var(--text)] mt-4">{f.title}</p>
              <p className="text-[12.5px] text-[var(--text-muted)] mt-2 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 sm:p-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight mb-8">
            How it works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="w-10 h-10 rounded-xl bg-[var(--brand)] text-[var(--brand-fg)] font-display font-bold text-sm flex items-center justify-center mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="font-semibold text-[14px] text-[var(--text)] leading-tight">{s.title}</p>
                <p className="text-[12.5px] text-[var(--text-muted)] mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--brand)] px-6 sm:px-10 lg:px-14 py-12 sm:py-14">
          <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-[var(--highlight)] opacity-15 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-[var(--accent)] opacity-15 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left max-w-xl">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--brand-fg)] tracking-tight leading-tight">
                Ready to get started?
              </h3>
              <p className="text-[var(--brand-fg)]/70 mt-3 text-sm leading-relaxed">
                {cta.subtext}
              </p>
            </div>
            <Link
              to={cta.to}
              className="inline-flex items-center gap-2 bg-[var(--highlight)] text-[var(--highlight-fg)] font-bold text-sm px-8 py-4 rounded-full hover:opacity-90 transition-opacity flex-shrink-0"
            >
              {cta.label}
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </PublicPageShell>
  );
};

export default ServicePage;