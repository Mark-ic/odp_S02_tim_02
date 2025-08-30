import axios from "axios";
import type { Meal } from "../../models/meal/Meal";
import type { IMealAPIService } from "./IMealAPIService";

const API_URL: string = import.meta.env.VITE_API_URL + "meals";

export const mealApi: IMealAPIService = {
  async getAllMeals(token: string): Promise<Meal[]> {
    try {
      const res = await axios.post<{ success: boolean; message: string; data: Meal[] }>(
        `${API_URL}/getAllMeals`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.data || [];
    } catch (error) {
      console.error("Error getting all meals:", error);
      return [];
    }
  },

  async updateMeal(token, mealName, price, image, prepTime) {
    try {
      const res = await axios.post<{ success: boolean; message: string; data?: Meal }>(
        `${API_URL}/updateMeal`,
        { mealName, price, image, prepTime },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.data || { idMeal: 0, mealName, price, image, prepTime, numberOfOrders: 0 };
    } catch (error) {
      console.error("Error updating meal:", error);
      return { idMeal: 0, mealName, price, image, prepTime, numberOfOrders: 0 };
    }
  },

  async removeMeal(token, mealName) {
    try {
      const res = await axios.post<{ success: boolean; message: string }>(
        `${API_URL}/removeMeal`,
        { mealName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.success;
    } catch (error) {
      console.error("Error removing meal:", error);
      return false;
    }
  },
};
