import React from "react";

const Favorites = () => {
  const favorites = [
    { id: 1, name: "Avocados", price: "KSh 150 / kg", image: "🥑" },
    { id: 2, name: "Tomatoes", price: "KSh 70 / kg", image: "🍅" },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold mb-5">Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((fav) => (
            <div key={fav.id} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4">
              <span className="text-4xl">{fav.image}</span>
              <div>
                <div className="font-bold">{fav.name}</div>
                <div className="text-green-700 font-semibold">{fav.price}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;