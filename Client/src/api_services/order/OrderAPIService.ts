import axios from "axios";
import type { IOrderAPIService } from "./IOrderAPIService";
import type { Order } from "../../models/order/Order";
import type { OrderStatus } from "../../enums/order/OrderStatus";
import type { DeliveryType } from "../../enums/order/DeliveryType";
import type { Meal } from "../../models/meal/Meal";
import type { UserDto } from "../../models/users/UserDto";

const API_URL = import.meta.env.VITE_API_URL + "orders";

export const orderApi: IOrderAPIService = {
  async getAllOrders(token: string): Promise<Order[]> {
    try {
      const res = await axios.post<{ success: boolean; data: Order[] }>(
        `${API_URL}/getAllOrders`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.data ?? [];
    } catch (error) {
      console.error("Error fetching all orders:", error);
      return [];
    }
  },

  async getOrdersFromUser(token: string, username: string): Promise<Order[]> {
    try {
      const res = await axios.post<{ success: boolean; data: Order[] }>(
        `${API_URL}/getOrdersFromUser`,
        { username },
        { headers: { Authorization: `Bearer ${token}` } }
        
      );
      console.log("Data: ", res.data.data);
      return res.data.data ?? [];
    } catch (error) {
      console.error("Error fetching orders from user:", error);
      return [];
    }
  },

  async getOrderById(token: string, orderId: number): Promise<Order | null> {
    try {
      const res = await axios.post<{ success: boolean; data: Order }>(
        `${API_URL}/getOrderById`,
        { orderId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.data ?? null;
    } catch (error) {
      console.error("Error fetching order by id:", error);
      return null;
    }
  },

  async createOrder(
    token: string,
    order: { timeLeft: number; status: OrderStatus; deliveryType: DeliveryType; adress: string; idJelo: number; idKorisnik: number }
  ): Promise<Order | null> {
    try {
      const res = await axios.post<{ success: boolean; data: Order }>(
        `${API_URL}/create`,
        order,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.data;
    } catch (error) {
      console.error("Error creating order:", error);
      return null;
    }
  },

  async updateOrder(
    token: string,
    order: { orderId: number; timeLeft: number; status: OrderStatus; deliveryType: DeliveryType; adress: string; idJelo: number; idKorisnik: number }
  ): Promise<Order | null> {
    try {
      const res = await axios.post<{ success: boolean; data: Order }>(
        `${API_URL}/updateOrder`,
        order,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.data ?? null;
    } catch (error) {
      console.error("Error updating order:", error);
      return null;
    }
  },

  async updateOrderStatus(token: string, orderId: number, status: OrderStatus): Promise<Order | null> {
    try {
      const res = await axios.post<{ success: boolean; data: Order }>(
        `${API_URL}/updateOrderStatus`,
        { orderId, status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.data ?? null;
    } catch (error) {
      console.error("Error updating order status:", error);
      return null;
    }
  },

  async deleteOrder(token: string, orderId: number): Promise<boolean> {
    try {
      const res = await axios.post<{ success: boolean }>(
        `${API_URL}/deleteOrder`,
        { orderId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.success ?? false;
    } catch (error) {
      console.error("Error deleting order:", error);
      return false;
    }
  },

  async deleteOrdersWithMeal(token: string, mealName: string): Promise<boolean> {
    try {
      const res = await axios.post<{ success: boolean }>(
        `${API_URL}/deleteOrdersWithMeal`,
        { mealName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.success ?? false;
    } catch (error) {
      console.error("Error deleting orders with meal:", error);
      return false;
    }
  },

  async deleteOrdersFromUser(token: string, username: string): Promise<boolean> {
    try {
      const res = await axios.post<{ success: boolean }>(
        `${API_URL}/deleteOrdersFromUser`,
        { username },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.success ?? false;
    } catch (error) {
      console.error("Error deleting orders from user:", error);
      return false;
    }
  },

  async getOrderMeal(token: string, orderId: number): Promise<Meal | null> {
    try {
      const res = await axios.post<{ success: boolean; data: Meal }>(
        `${API_URL}/getOrderMeal`,
        { orderId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.data ?? null;
    } catch (error) {
      console.error("Error fetching meal from order:", error);
      return null;
    }
  },

  async getOrderUser(token: string, orderId: number): Promise<UserDto | null> {
    try {
      const res = await axios.post<{ success: boolean; data: UserDto }>(
        `${API_URL}/getOrderUser`,
        { orderId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.data ?? null;
    } catch (error) {
      console.error("Error fetching user from order:", error);
      return null;
    }
  }
};
