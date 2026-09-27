import { Link } from "react-router-dom";
import PublicPageShell, { SERVICES_MENU } from "./PublicPageShell";

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const Services = () => {
  return (
    <PublicPageShell>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-fg)] mb-4">
            <span className="w-6 h-px bg-[var(--accent-fg)]/40" />
            Our Services
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] tracking-[-0.02em] leading-[1.1]">
            Everything you need to trade agriculture — in one place
          </h1>
          <p className="mt-5 text-[15px] sm:text-base text-[var(--text-muted)] leading-relaxed">
            From the first listing to the final delivery, AgriSoko builds the rails
            that Kenyan agriculture runs on.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES_MENU.map((s, i) => (
            <Link
              key={s.name}
              to={s.to}
              className="group bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 hover:border-[var(--border-strong)] hover:-translate-y-1 hover:shadow-[0_25px_50px_-25px_rgba(20,60,35,0.35)] transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-fg)] flex items-center justify-center text-lg font-display font-bold mb-5 group-hover:scale-105 transition-transform">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display font-bold text-[17px] text-[var(--text)] leading-tight">
                {s.name}
              </h3>
              <p className="text-[13px] text-[var(--text-muted)] mt-2 leading-relaxed flex-1">
                {s.desc}
              </p>
              <div className="flex items-center gap-1.5 mt-5 text-[12.5px] font-semibold text-[var(--accent-fg)]">
                Learn more
                <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PublicPageShell>
  );
};

export default Services;