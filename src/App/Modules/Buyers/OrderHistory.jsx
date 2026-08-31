import React from "react";

const OrderHistory = () => {
  const orders = [
    { id: "B101", date: "2025-05-20", total: 520, status: "Delivered" },
    { id: "B102", date: "2025-05-15", total: 780, status: "Delivered" },
    { id: "B103", date: "2025-05-10", total: 350, status: "Delivered" },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold mb-5">Order History</h1>
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left p-3">Order ID</th>
              <th className="text-left p-3">Date</th>
              <th className="text-left p-3">Total</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-gray-100">
                <td className="p-3 font-semibold">{order.id}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3">KSh {order.total}</td>
                <td className="p-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;