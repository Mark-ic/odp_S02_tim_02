import { useEffect, useState } from "react";
import { orderApi } from "../../api_services/order/OrderAPIService";
import type { Order } from "../../models/order/Order";
import { ReadValueByKey } from "../../helpers/local_storage";
import { jwtDecode } from "jwt-decode";
import type { JwtTokenClaims } from "../../types/auth/JwtTokenClaims";
import { UserOrder } from "./order/OrderDisplay";

export function UserOrdersList() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = ReadValueByKey("authToken");
      if (!token) {
        setError("User not logged in");
        setLoading(false);
        return;
      }

      let username: string;
      try {
        const decoded = jwtDecode<JwtTokenClaims>(token);
        username =decoded.username;
      } catch {
        setError("Invalid token");
        setLoading(false);
        return;
      }

      try {
        const res = await orderApi.getOrdersFromUser(token, username);
        if (res) setOrders(res);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch orders");
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  

  return (
  <div className="bg-white/90 backdrop-blur-md shadow-2xl border border-orange-300 rounded-2xl p-6 max-w-4xl w-full mx-auto mt-10">
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Orders</h2>

    {orders.length === 0 ? (
      <p className="text-center py-4 text-gray-500">Doesn't have orders</p>
    ) : (
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-orange-100 text-gray-700 uppercase text-sm font-semibold">
              <th className="px-4 py-2 border-b text-left">Order ID</th>
              <th className="px-4 py-2 border-b text-left">Meal ID</th>
              <th className="px-4 py-2 border-b text-left">Status</th>
              <th className="px-4 py-2 border-b text-left">Delivery Type</th>
              <th className="px-4 py-2 border-b text-left">Address</th>
              <th className="px-4 py-2 border-b text-left">Time Left</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <UserOrder key={order.idOrder} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);

}
