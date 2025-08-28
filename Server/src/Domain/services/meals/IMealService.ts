import { mealDTO } from "../../DTOs/meal/mealDTO";
import { Ingredient } from "../../models/Ingredient";
import { Meal } from "../../models/Meal";

export interface IMealService{
    getAllMeals():Promise<Meal[]>;
    changeMeal(meal:Meal):Promise<Meal>;
}