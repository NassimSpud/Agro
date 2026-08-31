import React from "react";

const Fruits = () => {
  const fruits = [
    { id: 1, name: "Avocados", price: "KSh 150 / kg", image: "🥑" },
    { id: 2, name: "Mangoes", price: "KSh 90 / kg", image: "🥭" },
    { id: 3, name: "Bananas", price: "KSh 50 / bunch", image: "🍌" },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold mb-5">Fruits</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {fruits.map((fruit) => (
          <div key={fruit.id} className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="text-4xl mb-2">{fruit.image}</div>
            <div className="font-bold">{fruit.name}</div>
            <div className="text-green-700">{fruit.price}</div>
            <button className="mt-2 bg-green-700 text-white px-3 py-1 rounded-lg text-sm">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fruits;