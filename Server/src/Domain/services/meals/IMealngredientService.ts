import { mealDTO } from "../../DTOs/meal/mealDTO";
import { Ingredient } from "../../models/Ingredient";
import { Meal } from "../../models/Meal";

export interface IMealIngredientService {
    addMeal(name: string, price: number, image: string, prepTime: number, ingredients: string[]): Promise<mealDTO>;
    getMealIngredients(mealName: string): Promise<Ingredient[]>
    changeMealIngredients(meal:Meal):Promise<Meal>;
}