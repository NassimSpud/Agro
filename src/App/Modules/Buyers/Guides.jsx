import React from "react";

const Guides = () => {
  const guides = [
    { id: 1, title: "How to Grow Healthy Tomatoes", excerpt: "Learn the best practices for tomato farming...", icon: "🍅" },
    { id: 2, title: "Post-Harvest Handling Tips", excerpt: "Reduce losses and maintain quality...", icon: "📦" },
    { id: 3, title: "Organic Pest Control", excerpt: "Natural methods to protect your crops...", icon: "🐞" },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold mb-5">Guides & Resources</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {guides.map((guide) => (
          <div key={guide.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-2">{guide.icon}</div>
            <h3 className="font-bold mb-1">{guide.title}</h3>
            <p className="text-sm text-gray-600">{guide.excerpt}</p>
            <button className="mt-3 text-green-700 font-semibold text-sm">Read more →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guides;