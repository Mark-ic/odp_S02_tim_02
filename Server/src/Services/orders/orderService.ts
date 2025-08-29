import { Order } from "../../Domain/models/Order";
import { IMealRepository } from "../../Domain/repositories/meals/IMealRepository";
import { IOrderRepository } from "../../Domain/repositories/orders/IOrderRepository";
import { IuserRepository } from "../../Domain/repositories/users/IUserRepository";
import { IOrderService } from "../../Domain/services/orders/IOrderService";
import {OrderStatus} from "../../Domain/enums/orders/orderStatusEnum";
import {DeliveryType} from "../../Domain/enums/orders/DeliveryTypeEnum";

export class OrderService implements IOrderService {
    private orderRepo: IOrderRepository;
    private mealRepo: IMealRepository;
    private userRepo: IuserRepository;
    public constructor(orderRepo: IOrderRepository, mealRepo: IMealRepository, userRepo: IuserRepository) {
        this.orderRepo = orderRepo;
        this.mealRepo = mealRepo;
        this.userRepo = userRepo;
    }


    create(timeLeft: number, status: OrderStatus, deliveryType: DeliveryType, adress: string, idJelo: number, idKorisnik: number): Promise<Order> {
        throw new Error("Method not implemented.");
    }

    getOrderById(id: number): Promise<Order> {
        throw new Error("Method not implemented.");
    }
    getOrderFromUser(userName: string): Promise<Order> {
        throw new Error("Method not implemented.");
    }

    updateOrder(orderId: number, timeLeft: number, status: OrderStatus, deliveryType: DeliveryType, adress: string, idJelo: number, idKorisnik: number): Promise<Order> {
        throw new Error("Method not implemented.");
    }
    updateOrderStatus(orderid: number, status: OrderStatus): Promise<Order> {
        throw new Error("Method not implemented.");
    }

    deleteOrder(id: number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    deleteOrderWithMeal(mealName: string): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    deleteOrdersFromUser(userName: string): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

}