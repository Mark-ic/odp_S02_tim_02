import { Ingredient } from "../../models/Ingredient";

export interface IIngredientRepository{
        create(ingredient: Ingredient): Promise<Ingredient>;
        getIngredientById(id: number): Promise<Ingredient>;
        getIngredientByName(name: string): Promise<Ingredient>;
        updateIngredient(ingredient: Ingredient): Promise<Ingredient>;
        deleteIngredient(id: number): Promise<boolean>;
}