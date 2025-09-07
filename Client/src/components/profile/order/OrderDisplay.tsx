import type { Order } from "../../../models/order/Order";

interface UserOrderProps {
  order: Order;
}

export function UserOrder({ order }: UserOrderProps) {
  
  let statusColor: string;
  switch (order.status) {
    case "PREPARING":
      statusColor = "orange";
      break;
    case "READY_FOR_PICKUP":
      statusColor = "green";
      break;
    case "IN_DELIVERY":
      statusColor = "blue";
      break;
    case "DONE":
      statusColor = "red";
      break;
    default:
      statusColor = "gray";
  }

  return (
    <tr className="border-b last:border-b-0">
      <td className="px-4 py-2">{order.idOrder}</td>
      <td className="px-4 py-2">{order.idMeal}</td>
      <td className="px-4 py-2 font-semibold" style={{ color: statusColor }}>
        {order.status}
      </td>
      <td className="px-4 py-2">{order.deliveryMethod}</td>
      <td className="px-4 py-2">{order.deliveryMethod === "DELIVERY" ? order.adress : "-"}</td>
      <td className="px-4 py-2">{order.timeLeft} min</td>
    </tr>
  );
}
