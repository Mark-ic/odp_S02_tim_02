import { Meal } from "../../models/Meal";

export interface IMealRepository{
        create(meal: Meal): Promise<Meal>;
        getMealById(id: number): Promise<Meal>;
        getMealByName(name: string): Promise<Meal>;
        getAllMeals():Promise<Meal[]>;
        updateMeal(meal: Meal): Promise<Meal>;
        deleteMeal(id: number): Promise<boolean>;
}