import { mealDTO } from "../../DTOs/meal/mealDTO";
import { Ingredient } from "../../models/Ingredient";
import { Meal } from "../../models/Meal";

export interface IMealService{
    getAllMeals():Promise<Meal[]>;
    updateMeal(name: string, price: number, image: string, prepTime: number):Promise<Meal>;
    removeMeal(name: string): Promise<boolean>;
}