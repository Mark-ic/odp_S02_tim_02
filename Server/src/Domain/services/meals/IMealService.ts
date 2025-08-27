import { Meal } from "../../models/Meal";

export interface IMealService{
    addMeal(name:string,price:number,image:string,prepTime:number):Promise<Meal>;
    getAllMeals():Promise<Meal[]>;
    removeMeal(id:number):Promise<boolean>;
    changeMeal(meal:Meal):Promise<Meal>;
}