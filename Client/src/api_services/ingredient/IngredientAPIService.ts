import axios from "axios";
import type { Ingredient } from "../../models/ingredient/Ingredient";
import type { IIngredientAPIService } from "./IIngredientAPIService";

const API_URL: string = import.meta.env.VITE_API_URL + "ingredients";

export const ingredientApi: IIngredientAPIService = {
  async createIngredient(token: string, name: string, category: string, alergen: boolean): Promise<Ingredient> {
    try {
      const res = await axios.post<{ success: boolean; message: string; data?: Ingredient }>(
        `${API_URL}/create`,
        { name, category, alergen },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.data || { idIngredient: 0, ingredientName: name, category, alergen };
    } catch (error) {
      console.error("Error creating ingredient:", error);
      return { idIngredient: 0, ingredientName: name, category, alergen };
    }
  },

  async getAllIngredients(token: string): Promise<Ingredient[]> {
    try {
      const res = await axios.post<{ success: boolean; message: string; data: Ingredient[] }>(
        `${API_URL}/getAllIngredients`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.data || [];
    } catch (error) {
      console.error("Error getting all ingredients:", error);
      return [];
    }
  },

  async getAllIngredientsFromGroup(token: string, groupName: string): Promise<Ingredient[]> {
    try {
      const res = await axios.post<{ success: boolean; message: string; data: Ingredient[] }>(
        `${API_URL}/getAllIngredientsFromGroup`,
        { groupName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.data || [];
    } catch (error) {
      console.error(`Error getting ingredients from group ${groupName}:`, error);
      return [];
    }
  },

  async getAllIngredientGroups(token: string): Promise<string[]> {
    try {
      const res = await axios.post<{ success: boolean; message: string; data: string[] }>(
        `${API_URL}/getAllIngredientGroups`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.data || [];
    } catch (error) {
      console.error("Error getting ingredient groups:", error);
      return [];
    }
  }
};
