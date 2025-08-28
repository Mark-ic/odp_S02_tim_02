import { mealDTO } from "../../Domain/DTOs/meal/mealDTO";
import { Ingredient } from "../../Domain/models/Ingredient";
import { Meal } from "../../Domain/models/Meal";
import { IIngredientRepository } from "../../Domain/repositories/ingredients/IIngredientRepository";
import { IMealIngrendientsRepo } from "../../Domain/repositories/meals/IMealIngredientsRep";
import { IMealRepository } from "../../Domain/repositories/meals/IMealRepository";
import { IMealService } from "../../Domain/services/meals/IMealService";

export class MealService implements IMealService {
    private mealRepo: IMealRepository;
    public constructor(mealRepo: IMealRepository){
        this.mealRepo =  mealRepo;
    }

    async getAllMeals(): Promise<Meal[]> {
        const result = await this.mealRepo.getAllMeals();

        if (result.length === 0){
            return [];
        }
        return result;
    }

    async changeMeal(meal: Meal): Promise<Meal> {
        throw new Error("Method not implemented.");
    }

}