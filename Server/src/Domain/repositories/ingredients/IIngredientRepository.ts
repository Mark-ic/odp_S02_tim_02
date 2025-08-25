import { Ingredient } from "../../models/Ingredient";

export interface IMIngredientRepository{
        create(ingredient: Ingredient): Promise<Ingredient>;
        getIngredientById(id: number): Promise<Ingredient>;
        updateIngredient(ingredient: Ingredient): Promise<Ingredient>;
        deleteIngredient(id: number): Promise<boolean>;
}