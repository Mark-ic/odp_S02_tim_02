import type { Ingredient } from "../../../models/ingredient/Ingredient";
import type { Meal } from "../../../models/meal/Meal";

export interface IMealIngredientAPIService {
  deleteIngredientFromMeals(token: string, ingredientName: string): Promise<boolean>;
  addIngredientToMeal(token: string, mealName: string, ingredientName: string): Promise<boolean>;
  removeIngredientFromMeal(token: string, mealName: string, ingredientName: string): Promise<boolean>;
  deleteIngredientsFromMeal(token: string, mealName: string): Promise<boolean>;
  addMeal(token: string, name: string, price: number, image: string, prepTime: number, ingredients: string[]): Promise<Meal>;
  getMealIngredients(token: string, mealName: string): Promise<Ingredient[]>;
  removeIngredient(token: string, ingredientName: string): Promise<boolean>;
}
