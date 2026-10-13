import ServicePage from "./ServicePage";

const Wholesale = () => (
  <ServicePage
    eyebrow="Service 05"
    title="Bulk orders and wholesale pricing"
    subtitle="Buy at scale — perfect for supermarkets, restaurants, schools, hotels, and exporters. Volume discounts start at 100kg."
    hero={{ emoji: "📦" }}
    features={[
      { icon: "🎯", title: "Tiered pricing",    desc: "Automatic volume discounts as quantities grow — no negotiation needed." },
      { icon: "📅", title: "Recurring supply",  desc: "Set up weekly, bi-weekly, or monthly deliveries from the same farm." },
      { icon: "📋", title: "Formal contracts",  desc: "Signed agreements with quantity, quality, and delivery SLAs." },
      { icon: "🧾", title: "Invoice billing",   desc: "Net-30 and Net-60 payment terms for verified institutional buyers." },
      { icon: "🏭", title: "Quality assurance", desc: "Pre-shipment inspection and grading for every bulk order." },
      { icon: "🌍", title: "Export-ready",      desc: "Documentation support for international shipments and certifications." },
    ]}
    steps={[
      { title: "Request a quote",    desc: "Tell us the products, quantities, and delivery schedule you need." },
      { title: "Get matched",        desc: "We pool supply from verified farmers to meet your volume." },
      { title: "Sign the contract",  desc: "Terms, quality standards, and delivery SLAs locked in writing." },
      { title: "Receive deliveries", desc: "Consistent supply on schedule, with full traceability back to source." },
    ]}
    cta={{
      label: "Request a wholesale quote",
      subtext: "Minimum 100kg per product. Institutional buyers get priority sourcing.",
      to: "/auth",
    }}
  />
);

export default Wholesale;