import type { OrderStatus } from "../../enums/order/OrderStatus";
import type { DeliveryType } from "../../enums/order/DeliveryType";

export interface Order {
  idOrder: number;
  timeLeft: number;
  status: OrderStatus;
  deliveryMethod: DeliveryType;
  adress: string;
  idMeal: number;
  idUser: number;
}
