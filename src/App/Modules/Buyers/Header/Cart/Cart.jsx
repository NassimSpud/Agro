import React, { useState } from "react";

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Sukuma Wiki", price: 40, quantity: 2, image: "🥬" },
    { id: 2, name: "Avocado", price: 30, quantity: 5, image: "🥑" },
    { id: 3, name: "Eggs (Tray)", price: 350, quantity: 1, image: "🥚" },
  ]);

  const updateQuantity = (id, delta) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1 className="font-display text-2xl font-bold mb-5">Your Cart</h1>
      {items.length === 0 ? (
        <div className="text-gray-500">Your cart is empty.</div>
      ) : (
        <>
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.image}</span>
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div className="text-sm text-gray-500">KSh {item.price} each</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">−</button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">+</button>
                  <span className="font-bold text-green-700">KSh {item.price * item.quantity}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <span className="font-display font-bold text-lg">Total</span>
            <span className="font-display font-bold text-xl text-green-700">KSh {total}</span>
          </div>
          <button className="mt-4 w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-lg transition-colors">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;