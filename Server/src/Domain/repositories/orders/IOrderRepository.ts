import { UserAuthDTO } from "../../DTOs/auth/UserAuthDTO";
import { Meal } from "../../models/Meal";
import { Order } from "../../models/Order";
import { User } from "../../models/User";

export interface IOrderRepository{
        create(order: Order): Promise<Order>;

        getOrderById(id: number): Promise<Order>;
        getAllOrders():Promise<Order[]>;
        getOrderUser(order:Order):Promise<UserAuthDTO>;
        getOrderMeal(order:Order):Promise<Meal>;
        getOrdersFromUser(user:User):Promise<Order[]>;

        updateOrder(order: Order): Promise<Order>;
        updateOrderStatus(order:Order):Promise<Order>;

        deleteOrder(order:Order): Promise<Boolean>;
        deleteOrdersWithMeal(meal:Meal):Promise<Boolean>;
        deleteOrdersFromUser(user:User):Promise<Boolean>;
}