import { mealDTO } from "../../DTOs/meal/mealDTO";
import { Ingredient } from "../../models/Ingredient";
import { Meal } from "../../models/Meal";

export interface IMealIngredientService {
    addMeal(name: string, price: number, image: string, prepTime: number, ingredients: string[]): Promise<mealDTO>;
    deleteIngredientsFromMeal(mealName: string): Promise<boolean>;
    getMealIngredients(mealName: string): Promise<Ingredient[]>
    addMealIngredient(mealName:string,ingredientName:string):Promise<Boolean>;
    removeMealIngredient(mealName:string,ingredientName:string):Promise<Boolean>;
    removeIngredient(name:string):Promise<Boolean>;
    deleteIngredientFromMeals(ingredientName:string):Promise<Boolean>;
}