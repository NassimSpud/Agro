const Vegetables = () => {
  const vegetables = [
    { id: 1, name: "Sukuma Wiki", price: "KSh 40 / bunch", image: "🥬" },
    { id: 2, name: "Spinach", price: "KSh 50 / bunch", image: "🥗" },
    { id: 3, name: "Carrots", price: "KSh 60 / kg", image: "🥕" },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold mb-5">Vegetables</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {vegetables.map((veg) => (
          <div key={veg.id} className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="text-4xl mb-2">{veg.image}</div>
            <div className="font-bold">{veg.name}</div>
            <div className="text-green-700">{veg.price}</div>
            <button className="mt-2 bg-green-700 text-white px-3 py-1 rounded-lg text-sm">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vegetables;