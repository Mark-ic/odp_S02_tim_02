import { Meal } from "../../Domain/models/Meal";
import { IMealRepository } from "../../Domain/repositories/meals/IMealRepository";
import { IMealService } from "../../Domain/services/meals/IMealService";

export class MealService implements IMealService{
    private mealRepo:IMealRepository;
    public constructor(mealRepo:IMealRepository){
        this.mealRepo=mealRepo;
    }

    async addMeal(name: string, price: number, image: string, prepTime: number): Promise<Meal> {
        const result = await this.mealRepo.getMealByName(name);
        
        if(result.idMeal !==0){
            return new Meal();
        }

        const meal :Meal = await this.mealRepo.create(new Meal(0,name,price,image,prepTime,0));
        
        if(meal.idMeal !== 0){
            console.log(`Unutar MealService je vratio ${meal.idMeal}`);
            return meal;
        }
        return new Meal(); 
    }
    
    async getAllMeals(): Promise<Meal[]> {
        throw new Error("Method not implemented.");
    }
    
    async removeMeal(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
    async changeMeal(meal: Meal): Promise<Meal> {
        throw new Error("Method not implemented.");
    }

}