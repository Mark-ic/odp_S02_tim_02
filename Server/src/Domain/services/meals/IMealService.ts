import { mealDTO } from "../../DTOs/meal/mealDTO";
import { Ingredient } from "../../models/Ingredient";
import { Meal } from "../../models/Meal";

export interface IMealService{
    addMeal(name:string,price:number,image:string,prepTime:number,ingredients:string[]):Promise<mealDTO>;
    getAllMeals():Promise<Meal[]>;
    getMealIngredients(meal:Meal):Promise<Ingredient[]>
    removeMeal(id:number):Promise<boolean>;
    changeMeal(meal:Meal):Promise<Meal>;
}