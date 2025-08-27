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
        throw new Error("Method not implemented.");
    }

    async getMealIngredients(meal: Meal): Promise<Ingredient[]> {
        throw new Error("Method not implemented.");
    }

    async removeMeal(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async changeMeal(meal: Meal): Promise<Meal> {
        throw new Error("Method not implemented.");
    }

}