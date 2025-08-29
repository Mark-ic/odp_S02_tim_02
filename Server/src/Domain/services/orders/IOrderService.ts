import { Order } from "../../models/Order";
import {DeliveryType} from "../../enums/orders/DeliveryTypeEnum";
import {OrderStatus} from "../../enums/orders/orderStatusEnum";

export interface IOrderService {
    create(timeLeft:number,status:OrderStatus,deliveryType:DeliveryType,adress:string, idJelo:number,idKorisnik:number): Promise<Order>;

    getOrderById(id: number): Promise<Order>;
    getOrdersFromUser(userName: string): Promise<Order[]>;
    getAllOrders():Promise<Order[]>;

    updateOrder(orderId:number,timeLeft:number,status:OrderStatus,deliveryType:DeliveryType,adress:string, idJelo:number,idKorisnik:number): Promise<Order>;
    updateOrderStatus(orderid: number,status:OrderStatus): Promise<Order>;

    deleteOrder(id: number): Promise<Boolean>;
    deleteOrdersWithMeal(mealName : string): Promise<Boolean>;
    deleteOrdersFromUser(userName : string): Promise<Boolean>;
}