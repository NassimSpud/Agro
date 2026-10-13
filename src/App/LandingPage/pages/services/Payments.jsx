import ServicePage from "./ServicePage";

const Payments = () => (
  <ServicePage
    eyebrow="Service 03"
    title="Secure payments with escrow protection"
    subtitle="Pay or get paid with M-Pesa, cards, or cash on delivery — every transaction protected by our escrow system."
    hero={{ emoji: "🛡️" }}
    features={[
      { icon: "📱", title: "M-Pesa built-in",       desc: "Instant STK push for buyers. Sellers receive funds directly to their phone." },
      { icon: "💳", title: "Card & bank transfers", desc: "Visa, Mastercard, and direct bank payouts supported for larger orders." },
      { icon: "🔒", title: "Escrow protection",     desc: "Money is held safely until the buyer confirms delivery." },
      { icon: "📄", title: "Automatic receipts",    desc: "Every transaction generates a downloadable tax-compliant receipt." },
      { icon: "⚡", title: "Instant payouts",       desc: "Sellers receive funds within minutes of delivery confirmation." },
      { icon: "🌐", title: "Multi-currency ready",  desc: "Support for KES, USD, and EUR for cross-border exporters." },
    ]}
    steps={[
      { title: "Buyer pays",     desc: "Funds are securely held in escrow — not released to the seller yet." },
      { title: "Order ships",    desc: "Seller is notified that payment is guaranteed and dispatches the goods." },
      { title: "Buyer confirms", desc: "Once delivery is confirmed, the funds are released to the seller." },
      { title: "Everyone wins",  desc: "Disputes handled by our team — transparent, fair, and fast." },
    ]}
    cta={{
      label: "Read our security policy",
      subtext: "Bank-grade encryption, PCI-DSS compliance, and Safaricom-certified M-Pesa integration.",
      to: "/auth",
    }}
  />
);

export default Payments;