import { Order } from "../../models/Order";

export interface IOrderRepository{
        create(order: Order): Promise<Order>;
        getOrderById(id: number): Promise<Order>;
        updateOrder(order: Order): Promise<Order>;
        deleteOrder(id: number): Promise<boolean>;
}