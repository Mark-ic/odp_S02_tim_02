import { Order } from "../../models/Order";
import { DeliveryType } from "../../enums/orders/DeliveryTypeEnum";
import { OrderStatus } from "../../enums/orders/orderStatusEnum";
import { UserAuthDTO } from "../../DTOs/auth/UserAuthDTO";
import { Meal } from "../../models/Meal";

export interface IOrderService {
    create(timeLeft: number, status: OrderStatus, deliveryType: DeliveryType, adress: string, idJelo: number, idKorisnik: number): Promise<Order>;

    getOrderById(id: number): Promise<Order>;
    getOrdersFromUser(userName: string): Promise<Order[]>;
    getAllOrders(): Promise<Order[]>;

    getOrderUser(orderid: number): Promise<UserAuthDTO>;
    getOrderMeal(orderid: number): Promise<Meal>;

    updateOrder(orderId: number, timeLeft: number, status: OrderStatus, deliveryType: DeliveryType, adress: string, idJelo: number, idKorisnik: number): Promise<Order>;
    updateOrderStatus(orderid: number, status: OrderStatus): Promise<Order>;

    deleteOrder(id: number): Promise<Boolean>;
    deleteOrdersWithMeal(mealName: string): Promise<Boolean>;
    deleteOrdersFromUser(userName: string): Promise<Boolean>;
}