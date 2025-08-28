import { Ingredient } from "../../Domain/models/Ingredient";
import { IIngredientRepository } from "../../Domain/repositories/ingredients/IIngredientRepository";
import { IIngredientService } from "../../Domain/services/ingredients/IIngredientService";

export class IngredientService implements IIngredientService{
    private ingredRepo : IIngredientRepository;
    public constructor(ingredRepo : IIngredientRepository){
        this.ingredRepo= ingredRepo;
    }

    async create(name:string,category:string,alergen:boolean): Promise<Ingredient> {
        const check = await this.ingredRepo.getIngredientByName(name);
        if(check.idIngredient!== 0){
            return new Ingredient();
        }

        const res = await this.ingredRepo.create(name,category,alergen);
        if(res.idIngredient !==0){
            return res;
        }
        return new Ingredient();

    }
    async getAllIngredients(): Promise<Ingredient[]> {
        const result = await this.ingredRepo.getAllIngredients();

        if (result.length === 0){
            return [];
        }
        return result;
    }
    async getAllIngredientsFromGroup(groupName: string): Promise<Ingredient[]> {
        const result = await this.ingredRepo.getAllIngredientsFromGroup(groupName);

        if (result.length === 0){
            return [];
        }
        return result;
    }
    async getAllIngredientGroups(): Promise<string[]> {
        const result = await this.ingredRepo.getAllIngredientGroups();

        if (result.length === 0){
            return [];
        }
        return result;
    }
    
}