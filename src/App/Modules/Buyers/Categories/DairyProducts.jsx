import React from "react";

const DairyProducts = () => {
  const dairy = [
    { id: 1, name: "Milk (1L)", price: "KSh 80", image: "🥛" },
    { id: 2, name: "Cheese (200g)", price: "KSh 250", image: "🧀" },
    { id: 3, name: "Yoghurt (500ml)", price: "KSh 120", image: "🍦" },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold mb-5">Dairy Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dairy.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="text-4xl mb-2">{item.image}</div>
            <div className="font-bold">{item.name}</div>
            <div className="text-green-700">{item.price}</div>
            <button className="mt-2 bg-green-700 text-white px-3 py-1 rounded-lg text-sm">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DairyProducts;