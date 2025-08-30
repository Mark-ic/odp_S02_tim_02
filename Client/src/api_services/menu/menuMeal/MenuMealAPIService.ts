import axios from "axios";
import type { Meal } from "../../../models/meal/Meal";
import type { IMenuMealAPIService } from "./IMenuMealAPIService";

const API_URL: string = import.meta.env.VITE_API_URL + "menuMeal";

export const menuMealApi: IMenuMealAPIService = {
  async getAllMealsFromMenu(menuName: string, token: string): Promise<Meal[]> {
    try {
      const res = await axios.post<{ success: boolean; message: string; data: Meal[] }>(
        `${API_URL}/getAllMealsFromMenu`,
        { menuName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.data || [];
    } catch (error: any) {
      console.error("Error getting all meals for menu:", error);
      return [];
    }
  },

  async getBestSellingMeals(menuName: string, token: string): Promise<Meal[]> {
    try {
      const res = await axios.post<{ success: boolean; message: string; data: Meal[] }>(
        `${API_URL}/getBestSellingMeals`,
        { menuName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.data || [];
    } catch (error: any) {
      console.error("Error getting best selling meals for menu:", error);
      return [];
    }
  },

  async addMealToMenu(mealName: string, menuName: string, token: string): Promise<boolean> {
    try {
      const res = await axios.post<{ success: boolean; message: string }>(
        `${API_URL}/addMealToMenu`,
        { mealName, menuName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.success;
    } catch (error: any) {
      console.error("Error adding meal to menu:", error);
      return false;
    }
  },

  async removeMealFromMenu(mealName: string, menuName: string, token: string): Promise<boolean> {
    try {
      const res = await axios.post<{ success: boolean; message: string }>(
        `${API_URL}/removeMealFromMenu`,
        { mealName, menuName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.success;
    } catch (error: any) {
      console.error("Error removing meal from menu:", error);
      return false;
    }
  },

  async removeMealFromMenus(mealName: string, token: string): Promise<boolean> {
    try {
      const res = await axios.post<{ success: boolean; message: string }>(
        `${API_URL}/removeMealFromMenus`,
        { mealName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.success;
    } catch (error: any) {
      console.error("Error removing meal from all menus:", error);
      return false;
    }
  },

  async removeMealsFromMenu(menuName: string, token: string): Promise<boolean> {
    try {
      const res = await axios.post<{ success: boolean; message: string }>(
        `${API_URL}/removeMealsFromMenu`,
        { menuName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.success;
    } catch (error: any) {
      console.error("Error removing all meals from menu:", error);
      return false;
    }
  }
};
