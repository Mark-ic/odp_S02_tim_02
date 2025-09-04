// OrderRow.tsx
import type { Order } from "../../../../models/order/Order";
import type { OrderStatus } from "../../../../enums/order/OrderStatus";

interface OrderRowProps {
  order: Order;
  username: string;
  mealName: string;
  orderStatuses: OrderStatus[];
  onStatusChange: (orderId: number, status: OrderStatus) => void;
  onDelete: (orderId: number) => void;
}

export function OrderRow({
  order,
  username,
  mealName,
  orderStatuses,
  onStatusChange,
  onDelete
}: OrderRowProps) 
{
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-4 py-3">{order.idOrder}</td>
      <td className="px-4 py-3">{username}</td>
      <td className="px-4 py-3">{mealName}</td>
      <td className="px-4 py-3">
        <select
          value={order.status}
          onChange={(e) => onStatusChange(order.idOrder, e.target.value as OrderStatus)}
          className="border p-1 rounded w-full"
        >
          {orderStatuses.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
      </td>
      <td className="px-4 py-3 flex gap-2 flex-wrap">
        <button
          onClick={() => onDelete(order.idOrder)}
          className="px-3 py-1.5 bg-red-500 hover:bg-red-700 text-white rounded-xl font-semibold transition cursor-pointer"
        > Delete </button>
      </td>
    </tr>
  );
}
