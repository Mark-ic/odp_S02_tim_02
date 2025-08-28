import { Ingredient } from "../../models/Ingredient";

export interface IIngredientRepository{
        create(ingredientName:string, category :string, alergen:boolean): Promise<Ingredient>;
        getIngredientById(id: number): Promise<Ingredient>;
        getIngredientByName(name: string): Promise<Ingredient>;
        getAllIngredients():Promise<Ingredient[]>;
        getAllIngredientsFromGroup(groupName:string):Promise<Ingredient[]>;
        getAllIngredientGroups():Promise<string[]>;
        deleteIngredient(id: number): Promise<boolean>;
}