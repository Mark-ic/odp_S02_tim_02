import { Meal } from "../../models/Meal";
import { Menu } from "../../models/Menu";

export interface IMenuMealService{

    getAllMealsFromMenu(menuName:string):Promise<Meal[]>;
    getBestSellingMeals(menuName:string):Promise<Meal[]>;
    
    addMealToMenu(mealName:string,menuName:string):Promise<Boolean>;
    removeMealFromMenu(mealName:string,menuName:string):Promise<Boolean>;

    removeMealFromMenus(mealName:string):Promise<Boolean>;
    removeMealsFromMenu(menuName:string):Promise<Boolean>;

}