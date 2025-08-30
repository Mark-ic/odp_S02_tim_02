import type { Meal } from "../../models/meal/Meal";

export interface IMealAPIService {
  getAllMeals(token: string): Promise<Meal[]>;
  updateMeal(token: string, mealName: string, price: number, image: string, prepTime: number): Promise<Meal>;
  removeMeal(token: string, mealName: string): Promise<boolean>;
}
