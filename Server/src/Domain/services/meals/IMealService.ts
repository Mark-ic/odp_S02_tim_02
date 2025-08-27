import { mealDTO } from "../../DTOs/meal/mealDTO";
import { Ingredient } from "../../models/Ingredient";
import { Meal } from "../../models/Meal";

export interface IMealService{

    getAllMeals():Promise<Meal[]>;
       removeMeal(id:number):Promise<boolean>;
    changeMeal(meal:Meal):Promise<Meal>;
}