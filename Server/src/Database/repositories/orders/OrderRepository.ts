import { Meal } from "../../../Domain/models/Meal";
import { Order } from "../../../Domain/models/Order";
import { User } from "../../../Domain/models/User";
import { IOrderRepository } from "../../../Domain/repositories/orders/IOrderRepository";

export class OrderRepository implements IOrderRepository{
    create(order: Order): Promise<Order> {
        throw new Error("Method not implemented.");
    }
    getOrderById(id: number): Promise<Order> {
        throw new Error("Method not implemented.");
    }
    getOrderFromUser(user: User): Promise<Order> {
        throw new Error("Method not implemented.");
    }
    updateOrder(order: Order): Promise<Order> {
        throw new Error("Method not implemented.");
    }
    updateOrderStatus(order: Order): Promise<Order> {
        throw new Error("Method not implemented.");
    }
    deleteOrder(order:Order): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    deleteOrderWithMeal(meal: Meal): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    deleteOrdersFromUser(user: User): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    
}