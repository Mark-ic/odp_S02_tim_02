import { mealDTO } from "../../Domain/DTOs/meal/mealDTO";
import { Ingredient } from "../../Domain/models/Ingredient";
import { Meal } from "../../Domain/models/Meal";
import { IIngredientRepository } from "../../Domain/repositories/ingredients/IIngredientRepository";
import { IMealIngrendientsRepo } from "../../Domain/repositories/meals/IMealIngredientsRep";
import { IMealRepository } from "../../Domain/repositories/meals/IMealRepository";
import { IMealService } from "../../Domain/services/meals/IMealService";

export class MealService implements IMealService {
    private mealRepo: IMealRepository;
    public constructor(mealRepo: IMealRepository) {
        this.mealRepo = mealRepo;
    }

    async getAllMeals(): Promise<Meal[]> {
        const result = await this.mealRepo.getAllMeals();

        if (result.length === 0) {
            return [];
        }
        return result;
    }

    async updateMeal(name: string, price: number, image: string, prepTime: number): Promise<Meal> {
        const meal = await this.mealRepo.getMealByName(name);
        if (meal.idMeal === 0) {
            return new Meal();
        }
        const result = await this.mealRepo.updateMeal(new Meal(meal.idMeal, name, price, image, prepTime, meal.numberOfOrders));
        if (result.idMeal !== 0) {
            return result;
        }


        return new Meal();
    }

    async removeMeal(name: string): Promise<boolean> {
        const id = await this.mealRepo.getMealByName(name);
        if (id.idMeal === 0) {
            return false;
        }
        const deletedFromMeals = this.mealRepo.deleteMeal(id.idMeal);
        return deletedFromMeals;
    }

}