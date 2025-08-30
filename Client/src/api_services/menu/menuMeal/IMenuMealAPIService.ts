import type { Meal } from "../../../models/meal/Meal";

export interface IMenuMealAPIService {
  getAllMealsFromMenu(menuName: string, token: string): Promise<Meal[]>;
  getBestSellingMeals(menuName: string, token: string): Promise<Meal[]>;
  addMealToMenu(mealName: string, menuName: string, token: string): Promise<boolean>;
  removeMealFromMenu(mealName: string, menuName: string, token: string): Promise<boolean>;
  removeMealFromMenus(mealName: string, token: string): Promise<boolean>;
  removeMealsFromMenu(menuName: string, token: string): Promise<boolean>;
}
