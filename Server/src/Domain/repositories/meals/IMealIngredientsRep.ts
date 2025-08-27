import { Ingredient } from "../../models/Ingredient";
import { Meal } from "../../models/Meal";

export interface IMealIngrendientsRepo{
    addIngredientToMeal(mealID:number,ingredientID:number):Promise<boolean>;
    deleteIngredientsFromMeal(id: number): Promise<boolean>;
    removeIngredientFromMeal(meal:Meal, ingredient:Ingredient):Promise<boolean>;
    deleteIngredientFromMeals(idIngredient : number): Promise<boolean>;
    getIngredientsForMeal(mealId: number):Promise<Ingredient[]>;    
}