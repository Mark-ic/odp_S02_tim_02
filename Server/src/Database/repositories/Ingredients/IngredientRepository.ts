import { RowDataPacket } from "mysql2";
import { Ingredient } from "../../../Domain/models/Ingredient";
import { IIngredientRepository } from "../../../Domain/repositories/ingredients/IIngredientRepository";
import db from "../../connection/DbConnectionPool";

export class IngredientRepository implements IIngredientRepository{
    async create(ingredient: Ingredient): Promise<Ingredient> {
        throw new Error("Method not implemented.");
    }
    async getIngredientById(id: number): Promise<Ingredient> {
        throw new Error("Method not implemented.");
    }
    async getIngredientByName(name: string): Promise<Ingredient> {
        try {
            const query: string = 'SELECT * FROM sastojak WHERE nazivSastojka = ?';

            const [Rows] = await db.execute<RowDataPacket[]>(query, [name]);
            
            if (Rows.length > 0) {
                const row = Rows[0];
                return new Ingredient(row.idSastojak, row.nazivSastojka, row.kategorija, row.alergen);
            }

            return new Ingredient();
        }
        catch {
            return new Ingredient();
        }
    }
    async updateIngredient(ingredient: Ingredient): Promise<Ingredient> {
        throw new Error("Method not implemented.");
    }
    async deleteIngredient(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }


}