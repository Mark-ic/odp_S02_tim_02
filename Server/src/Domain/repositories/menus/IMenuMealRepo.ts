import { Meal } from "../../models/Meal";
import { Menu } from "../../models/Menu";

export interface IMenuMealRepo{

    getAllMealsFromMenu(Menu:Menu):Promise<Meal[]>;
    getNumberOfMealsOnMenu(Menu:Menu):Promise<number>;
    getBestSellingMeals(Menu:Menu):Promise<Meal[]>;
    
    addMealToMenu(Meal:Meal,Menu:Menu):Promise<Boolean>;
    removeMealFromMenu(Meal:Meal,Menu:Menu):Promise<Boolean>;

    removeMealFromMenus(Meal:Meal):Promise<Boolean>;
    removeMealsFromMenu(menu:Menu):Promise<Boolean>;

}