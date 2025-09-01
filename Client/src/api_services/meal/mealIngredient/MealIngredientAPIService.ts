import axios from "axios";
import type { Ingredient } from "../../../models/ingredient/Ingredient";
import type { Meal } from "../../../models/meal/Meal";
import type { IMealIngredientAPIService } from "./IMealIngredientAPIService";

const API_URL: string = import.meta.env.VITE_API_URL + "mealIng";

export const mealIngredientApi: IMealIngredientAPIService = {
  async addMeal(
    token: string,
    name: string,
    price: number,
    image: string,
    prepTime: number,
    ingredients: string[]
  ): Promise<Meal> {
    try {
      const res = await axios.post(
        `${API_URL}/createMeal`,
        { mealName: name, price, image, prepTime, ingredients },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.data || { idMeal: 0, mealName: name, price, image, prepTime, numberOfOrders: 0 };
    } catch (error) {
      console.error("Error adding meal:", error);
      return { idMeal: 0, mealName: name, price, image, prepTime, numberOfOrders: 0 };
    }
  },

  async getMealIngredients(token: string, mealName: string): Promise<Ingredient[]> {
    try {
      const res = await axios.post(
        `${API_URL}/getMealIng`,
        { mealName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.data || [];
    } catch (error) {
      console.error("Error getting meal ingredients:", error);
      return [];
    }
  },

  async addIngredientToMeal(token: string, mealName: string, ingredientName: string): Promise<boolean> {
    try {
      const res = await axios.post(
        `${API_URL}/addIngredientToMeal`,
        { mealName, ingredientName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.success;
    } catch (error) {
      console.error("Error adding ingredient to meal:", error);
      return false;
    }
  },

  async removeIngredientFromMeal(token: string, mealName: string, ingredientName: string): Promise<boolean> {
    try {
      const res = await axios.post(
        `${API_URL}/removeIngredientsFromMeal`,
        { mealName, ingredientName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.success;
    } catch (error) {
      console.error("Error removing ingredient from meal:", error);
      return false;
    }
  },

  async deleteIngredientsFromMeal(token: string, mealName: string): Promise<boolean> {
    try {
      const res = await axios.post(
        `${API_URL}/deleteIngredientsFromMeal`,
        { mealName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.success;
    } catch (error) {
      console.error("Error deleting all ingredients from meal:", error);
      return false;
    }
  },

  async removeIngredient(token: string, ingredientName: string): Promise<boolean> {
    try {
      const res = await axios.post(
        `${API_URL}/removeIngredient`,
        { ingredientName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.success;
    } catch (error) {
      console.error("Error removing ingredient:", error);
      return false;
    }
  },

  async deleteIngredientFromMeals(token: string, ingredientName: string): Promise<boolean> {
    try {
      const res = await axios.post(
        `${API_URL}/deleteIngredientFromMeals`,
        { ingredientName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.success;
    } catch (error) {
      console.error("Error deleting ingredient from all meals:", error);
      return false;
    }
  }
};
