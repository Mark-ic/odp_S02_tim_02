import { Ingredient } from "../../models/Ingredient";

export interface IIngredientService{
    create(name:string,category:string,alergen:boolean): Promise<Ingredient>
    getAllIngredients(): Promise<Ingredient[]>;
    getAllIngredientsFromGroup(groupName:string): Promise<Ingredient[]>;
    getAllIngredientGroups():Promise<string[]>;
}