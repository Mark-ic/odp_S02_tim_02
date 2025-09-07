import { useEffect, useState } from "react";
import { orderApi } from "../../../../api_services/order/OrderAPIService";
import type { Order } from "../../../../models/order/Order";
import type { OrderStatus } from "../../../../enums/order/OrderStatus";
import { OrderRow } from "./OrderRow";
import toast from "react-hot-toast";

interface OrdersTabProps {
  token: string;
}

export function OrdersTab({ token }: OrdersTabProps) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [usersMap, setUsersMap] = useState<Record<number, string>>({});
  const [mealsMap, setMealsMap] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState(true);

  const orderStatuses: OrderStatus[] = ["PREPARING", "READY", "DELIVERING", "DELIVERED"];

  const fetchData = async () => {
    setLoading(true);
    const ordersData = await orderApi.getAllOrders(token);
    setOrders(ordersData);

    const userMap: Record<number, string> = {};
    const mealMap: Record<number, string> = {};

    await Promise.all(
      ordersData.map(async order => {
        if (!userMap[order.idUser]) {
          const user = await orderApi.getOrderUser(token, order.idOrder);
          userMap[order.idUser] = user?.username ?? `User ${order.idUser}`;
        }
        if (!mealMap[order.idMeal]) {
          const meal = await orderApi.getOrderMeal(token, order.idOrder);
          mealMap[order.idMeal] = meal?.mealName ?? `Meal ${order.idMeal}`;
        }
      })
    );

    setUsersMap(userMap);
    setMealsMap(mealMap);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  const handleStatusChange = async (orderId: number, status: OrderStatus) => {
    const updated = await orderApi.updateOrderStatus(token, orderId, status);
    if (updated) {
      toast.success("Order status updated!");
      fetchData();
    } else {
      toast.error("Failed to update order status.");
    }
  };

  const handleDelete = async (orderId: number) => {
    const confirmed = window.confirm(`Are you sure you want to delete order ${orderId}?`);
    if (!confirmed) return;
    const deleted = await orderApi.deleteOrder(token, orderId);
    if (deleted) {
      toast.success("Order deleted!");
      fetchData();
    } else {
      toast.error("Failed to delete order.");
    }
  };

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading orders...</p>;

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-5xl w-full mx-auto mt-10">
      
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800"> All Orders </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-orange-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Order ID</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">User</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Meal</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map(order => (
              <OrderRow
                key={order.idOrder}
                order={order}
                username={usersMap[order.idUser] ?? `User ${order.idUser}`}
                mealName={mealsMap[order.idMeal] ?? `Meal ${order.idMeal}`}
                orderStatuses={orderStatuses}
                onStatusChange={handleStatusChange}
                onDelete={handleDelete}
              />
            ))}
            {orders.length === 0 && (
              <tr>
                <td className="px-4 py-3 text-center" colSpan={5}>No orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
