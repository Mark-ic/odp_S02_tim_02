import { mealDTO } from "../../Domain/DTOs/meal/mealDTO";
import { Ingredient } from "../../Domain/models/Ingredient";
import { Meal } from "../../Domain/models/Meal";
import { IIngredientRepository } from "../../Domain/repositories/ingredients/IIngredientRepository";
import { IMealIngrendientsRepo } from "../../Domain/repositories/meals/IMealIngredientsRep";
import { IMealRepository } from "../../Domain/repositories/meals/IMealRepository";
import { IMealService } from "../../Domain/services/meals/IMealService";

export class MealService implements IMealService {
    private mealRepo: IMealRepository;
    private ingredientRepo: IIngredientRepository;
    private mealingredientRepo: IMealIngrendientsRepo;
    //Not completly SOLID, but this is the simplest solution
    public constructor(mealRepo: IMealRepository, ingredientRepo: IIngredientRepository, mealingredientRepo: IMealIngrendientsRepo) {
        this.mealRepo = mealRepo;
        this.ingredientRepo = ingredientRepo;
        this.mealingredientRepo = mealingredientRepo;
    }

    async addMeal(name: string, price: number, image: string, prepTime: number, ingredients: string[]): Promise<mealDTO> {
        const result = await this.mealRepo.getMealByName(name);

        if (result.idMeal !== 0) {
            return new mealDTO(undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Meal already exists!");
        }

        const meal: Meal = await this.mealRepo.create(new Meal(0, name, price, image, prepTime, 0));

        for (const element of ingredients) {
            const ingred = await this.ingredientRepo.getIngredientByName(element);
            if (ingred.idIngredient !== 0) {
                const addedOK: boolean = await this.mealingredientRepo.addIngredientToMeal(meal.idMeal, ingred.idIngredient);
                if (!addedOK) {
                    return new mealDTO(
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        `Unable to add ingredient! ${element}`
                    );
                }
            }
        }
        const MealDTO: mealDTO = new mealDTO(meal.idMeal, meal.mealName, meal.price, meal.image, meal.prepTime, meal.numberOfOrders, ingredients); return MealDTO;
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