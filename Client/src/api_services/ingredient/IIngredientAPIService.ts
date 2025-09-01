import type { Ingredient } from "../../models/ingredient/Ingredient";

export interface IIngredientAPIService {
  createIngredient(token: string, name: string, category: string, alergen: boolean): Promise<Ingredient>;
  getAllIngredients(token: string): Promise<Ingredient[]>;
  getAllIngredientsFromGroup(token: string, groupName: string): Promise<Ingredient[]>;
  getAllIngredientGroups(token: string): Promise<string[]>;
}
