import type { Order } from "../../models/order/Order";
import type { OrderStatus } from "../../enums/order/OrderStatus";
import type { DeliveryType } from "../../enums/order/DeliveryType";
import type { Meal } from "../../models/meal/Meal";
import type { UserDto } from "../../models/users/UserDto";

export interface IOrderAPIService {
  getAllOrders(token: string): Promise<Order[]>;
  getOrdersFromUser(token: string, username: string): Promise<Order[]>;
  getOrderById(token: string, orderId: number): Promise<Order | null>;
  createOrder(token: string, order: {
      timeLeft: number;
      status: OrderStatus;
      deliveryType: DeliveryType;
      adress: string;
      idJelo: number;
      idKorisnik: number;
    }
  ): Promise<Order | null>;
  updateOrder(token: string, order: {
      orderId: number;
      timeLeft: number;
      status: OrderStatus;
      deliveryType: DeliveryType;
      adress: string;
      idJelo: number;
      idKorisnik: number;
    }
  ): Promise<Order | null>;
  
  updateOrderStatus(token: string, orderId: number, status: OrderStatus): Promise<Order | null>;
  deleteOrder(token: string, orderId: number): Promise<boolean>;
  deleteOrdersWithMeal(token: string, mealName: string): Promise<boolean>;
  deleteOrdersFromUser(token: string, username: string): Promise<boolean>;
  getOrderMeal(token: string, orderId: number): Promise<Meal | null>;
  getOrderUser(token: string, orderId: number): Promise<UserDto | null>;
}
