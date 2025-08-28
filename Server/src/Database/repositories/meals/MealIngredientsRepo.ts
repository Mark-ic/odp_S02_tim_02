import { ResultSetHeader, RowDataPacket } from "mysql2";
import { IMealIngrendientsRepo } from "../../../Domain/repositories/meals/IMealIngredientsRep";
import db from "../../connection/DbConnectionPool";
import { Meal } from "../../../Domain/models/Meal";
import { Ingredient } from "../../../Domain/models/Ingredient";

export class MealIngedientsRepo implements IMealIngrendientsRepo {

    async deleteIngredientsFromMeal(id: number): Promise<boolean> {
        try {
            const query: string = 'DELETE FROM Jelo_Sastojak WHERE idJelo = ?';
            const [result] = await db.execute<ResultSetHeader>(query, [id]);
            return result.affectedRows > 0;
        }
        catch {
            return false;
        }
    }
    async removeIngredientFromMeal(mealID: number, ingredientID: number): Promise<boolean> {
        try {
            const query: string = 'DELETE FROM Jelo_Sastojak WHERE idJelo = ? AND idSastojak=?';
            const [result] = await db.execute<ResultSetHeader>(query, [mealID, ingredientID]);
            return result.affectedRows > 0;
        }
        catch {
            return false;
        }
    }
    
    async deleteIngredientFromMeals(ingredientID: number): Promise<boolean> {
        try {
            const query: string = 'DELETE FROM Jelo_Sastojak WHERE idSastojak = ?';
            const [result] = await db.execute<ResultSetHeader>(query, [ingredientID]);
            return result.affectedRows > 0;
        }
        catch {
            return false;
        }
    }

    async getIngredientsForMeal(mealId: number): Promise<Ingredient[]> {
        try {
            const query = `
            SELECT s.idSastojak, s.nazivSastojka, s.kategorija, s.alergen
            FROM jelo_sastojak js
            JOIN sastojak s ON js.idSastojak = s.idSastojak
            WHERE js.idJelo = ?;
        `;

            const [Rows] = await db.execute<RowDataPacket[]>(query, [
                mealId
            ]);
            if (Rows.length === 0) {
                return [];
            }
            const ingredients: Ingredient[] = Rows.map(row => new Ingredient(
                row.idSastojak,
                row.imeSastojka,
                row.kategorija,
                row.alergen?.toLowerCase() === "yes"
            ));
            return ingredients;
        }
        catch {
            return [];
        }
    }

    async addIngredientToMeal(mealID: number, ingredientID: number): Promise<boolean> {
        try {
            console.log(`Dobili smo ${mealID} i ${ingredientID}`);
            const query = `INSERT INTO Jelo_Sastojak (idJelo,idSastojak) VALUES (?,?);`
            const [result] = await db.execute<ResultSetHeader>(query, [mealID, ingredientID]);
            console.log(`Insreted ID je: ${result.insertId}`);
            if (result.affectedRows > 0) {
                return true;
            }
            return false;
        }
        catch {
            return false;
        }
    }
}