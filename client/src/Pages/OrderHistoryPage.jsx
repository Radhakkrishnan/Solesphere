import { useState, useEffect } from "react";
import { getOrders } from "../Services/api";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const loadAllOrders = async () => {
      const response = await getOrders(token);
      console.log(response.Orders);
      setOrders(response.Orders);
    };
    loadAllOrders();
  }, []);
  return (
    <div className="min-h-screen pt-24 px-8 bg-[#e6e6e6]">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-semibold mb-4">Order History</h1>
        {orders.length == 0 ? (
          <p className="text-center text-gray-500 text-lg">
            You have no orders yet.
          </p>
        ) : (
          <div className="space-y-8">
            {orders.map((order, index) => (
              <div
                key={order._id}
                className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      Order ID: <span className="font-medium">{order._id}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Date: {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="text-lg font-medium text-gray-800">₹ {order.totalAmount}</p>
                </div>

                <ul className="space-y-2">
                    {
                        order.orderItems.map((item,i) => (
                            <li
                                key={i}
                                className="flex justify-between border-b border-gray-100 pb-2 text-sm text-gray-700"
                            >
                               <span>{item.name}</span>
                               <span>{item.number}</span>
                            </li>
                        ))
                    }        
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
