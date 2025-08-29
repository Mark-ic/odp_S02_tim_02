import { Order } from "../../Domain/models/Order";
import { IMealRepository } from "../../Domain/repositories/meals/IMealRepository";
import { IOrderRepository } from "../../Domain/repositories/orders/IOrderRepository";
import { IuserRepository } from "../../Domain/repositories/users/IUserRepository";
import { IOrderService } from "../../Domain/services/orders/IOrderService";
import { OrderStatus } from "../../Domain/enums/orders/orderStatusEnum";
import { DeliveryType } from "../../Domain/enums/orders/DeliveryTypeEnum";
import { UserAuthDTO } from "../../Domain/DTOs/auth/UserAuthDTO";
import { Meal } from "../../Domain/models/Meal";
import { User } from "../../Domain/models/User";

export class OrderService implements IOrderService {
    private orderRepo: IOrderRepository;
    private mealRepo: IMealRepository;
    private userRepo: IuserRepository;
    public constructor(orderRepo: IOrderRepository, mealRepo: IMealRepository, userRepo: IuserRepository) {
        this.orderRepo = orderRepo;
        this.mealRepo = mealRepo;
        this.userRepo = userRepo;
    }

    async getOrderUser(orderid: number): Promise<UserAuthDTO> {
        const order = await this.orderRepo.getOrderById(orderid);
        if (order.idOrder === 0) {
            return new UserAuthDTO();
        }
        console.log('Pronadjen je order!');
        const result = await this.orderRepo.getOrderUser(order);
        console.log(result.username);
        if (result.id !== 0) {
            return result;
        }
        return new UserAuthDTO();
    }

    async getOrderMeal(orderid: number): Promise<Meal> {
        console.log(`Prosledjen je ${orderid}`);
        const order = await this.orderRepo.getOrderById(orderid);
        if (order.idOrder === 0) {
            return new Meal();
        }
        console.log('Pronadjen je order!');
        const result = await this.orderRepo.getOrderMeal(order);
        if (result.idMeal !== 0) {
            return result;
        }
        return new Meal();
    }

    async getAllOrders(): Promise<Order[]> {
        return await this.orderRepo.getAllOrders();
    }

    async create(timeLeft: number, status: OrderStatus, deliveryType: DeliveryType, adress: string, idJelo: number, idKorisnik: number): Promise<Order> {

        const result = await this.orderRepo.create(new Order(0, timeLeft, status, deliveryType, adress, idJelo, idKorisnik));
        if (result.idOrder !== 0) {
            return result;
        }
        return new Order;
    }

    async getOrderById(id: number): Promise<Order> {
        return await this.orderRepo.getOrderById(id);
    }

    async getOrdersFromUser(userName: string): Promise<Order[]> {
        const user = await this.userRepo.getByUsername(userName);
        if (user.idUser === 0) {
            return [];
        }
        const result = await this.orderRepo.getOrdersFromUser(user);
        if (result.length > 0) {
            return result;
        }
        return [];
    }

    async updateOrder(orderId: number, timeLeft: number, status: OrderStatus, deliveryMethod: DeliveryType, adress: string, idJelo: number, idKorisnik: number): Promise<Order> {
        const order = await this.orderRepo.getOrderById(orderId);
        if (order.idOrder === 0) {
            return new Order();
        }
        const result = await this.orderRepo.updateOrder(new Order(orderId, timeLeft, status, deliveryMethod, adress, idJelo, idKorisnik));
        if (result.idOrder !== 0) {
            return result;
        }
        return new Order;
    }

    async updateOrderStatus(orderid: number, status: OrderStatus): Promise<Order> {
        const order = await this.orderRepo.getOrderById(orderid);
        if (order.idOrder === 0) {
            return new Order();
        }
        console.log('nadjena porudzbina');
        const result = await this.orderRepo.updateOrderStatus(new Order(orderid, order.timeLeft, status, order.deliveryMethod, order.adress, order.idMeal, order.idOrder));
        if (result.idOrder !== 0) {
            return result;
        }
        return new Order();
    }

    async deleteOrder(id: number): Promise<Boolean> {
        const order = await this.orderRepo.getOrderById(id);
        if (order.idOrder === 0) {
            return false;
        }
        const result = await this.orderRepo.deleteOrder(order);
        return result;
    }

    async deleteOrdersWithMeal(mealName: string): Promise<Boolean> {
        const meal = await this.mealRepo.getMealByName(mealName);
        if (meal.idMeal === 0) {
            return false;
        }
        const result = await this.orderRepo.deleteOrdersWithMeal(meal);
        return result;
    }

    async deleteOrdersFromUser(userName: string): Promise<Boolean> {
        const user = await this.userRepo.getByUsername(userName);
        if (user.idUser === 0) {
            return false;
        }
        const result = await this.orderRepo.deleteOrdersFromUser(user);
        return result;
    }

}