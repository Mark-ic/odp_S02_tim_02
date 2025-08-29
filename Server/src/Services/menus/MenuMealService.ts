import { Meal } from "../../Domain/models/Meal";
import { IMealRepository } from "../../Domain/repositories/meals/IMealRepository";
import { IMenuMealRepo } from "../../Domain/repositories/menus/IMenuMealRepo";
import { IMenuRepository } from "../../Domain/repositories/menus/IMenuRepository";
import { IMenuMealService } from "../../Domain/services/menus/IMenuMealService";

export class MenuMealService implements IMenuMealService {
    private menuRepo: IMenuRepository;
    private mealRepo: IMealRepository;
    private menuMealRepo: IMenuMealRepo;
    public constructor(menuRepo: IMenuRepository, mealRepo: IMealRepository, menuMealRepo: IMenuMealRepo) {
        this.menuRepo = menuRepo;
        this.mealRepo = mealRepo;
        this.menuMealRepo = menuMealRepo;
    }

    async getAllMealsFromMenu(menuName: string): Promise<Meal[]> {
        const menu = await this.menuRepo.getMenuByName(menuName);
        if (menu.idMenu === 0) {
            return [];
        }
        const result = await this.menuMealRepo.getAllMealsFromMenu(menu);
        if (result.length > 0) {
            return result;
        }
        return [];
    }
    async addMealToMenu(mealName: string, menuName: string): Promise<Boolean> {
        const menu = await this.menuRepo.getMenuByName(menuName);
        if (menu.idMenu === 0) {
            return false;
        }
        const numOfMealsPerMenu = await this.menuMealRepo.getNumberOfMealsOnMenu(menu);
        if (numOfMealsPerMenu < 20) {
            const meal = await this.mealRepo.getMealByName(mealName);
            if (meal.idMeal !== 0) {
                const result = await this.menuMealRepo.addMealToMenu(meal, menu);
                return result;
            }
        }
        return false;
    }
    async removeMealFromMenu(mealName: string, menuName: string): Promise<Boolean> {
        const menu = await this.menuRepo.getMenuByName(menuName);
        if (menu.idMenu === 0) {
            return false;
        }
        const numOfMealsPerMenu = await this.menuMealRepo.getNumberOfMealsOnMenu(menu);
        if (numOfMealsPerMenu < 20) {
            const meal = await this.mealRepo.getMealByName(mealName);
            if (meal.idMeal !== 0) {
                const result = await this.menuMealRepo.removeMealFromMenu(meal, menu);
                return result;
            }
        }
        return false;
    }
    async removeMealFromMenus(mealName: string): Promise<Boolean> {
        const meal = await this.mealRepo.getMealByName(mealName);
        if (meal.idMeal === 0) {
            return false;
        }
        const result = await this.menuMealRepo.removeMealFromMenus(meal);
        return result;
    }
    async removeMealsFromMenu(menuName: string): Promise<Boolean> {
        const menu = await this.menuRepo.getMenuByName(menuName);
        if (menu.idMenu === 0) {
            return false;
        }
        const result = await this.menuMealRepo.removeMealsFromMenu(menu);
        return result;
    }
}