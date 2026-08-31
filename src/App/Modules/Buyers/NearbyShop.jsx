import React from "react";

const NearbyShop = () => {
  const shops = [
    { id: 1, name: "Green World Farm", distance: "2.5 km", address: "Westlands, Nairobi" },
    { id: 2, name: "Fresh Market Ltd", distance: "4.0 km", address: "Kilimani, Nairobi" },
    { id: 3, name: "Organic Supplies", distance: "6.2 km", address: "Parklands, Nairobi" },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold mb-5">Nearby Shops</h1>
      <div className="bg-gray-200 h-56 rounded-xl mb-4 flex items-center justify-center text-gray-500">
        🗺️ Map placeholder
      </div>
      <div className="space-y-3">
        {shops.map((shop) => (
          <div key={shop.id} className="bg-white border border-gray-200 rounded-xl p-4 flex justify-between items-center">
            <div>
              <div className="font-bold">{shop.name}</div>
              <div className="text-sm text-gray-500">{shop.address}</div>
            </div>
            <span className="text-green-700 font-semibold">{shop.distance}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyShop;