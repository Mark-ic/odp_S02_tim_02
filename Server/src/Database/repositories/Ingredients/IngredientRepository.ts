import { ResultSetHeader, RowDataPacket } from "mysql2";
import { Ingredient } from "../../../Domain/models/Ingredient";
import { IIngredientRepository } from "../../../Domain/repositories/ingredients/IIngredientRepository";
import db from "../../connection/DbConnectionPool";

export class IngredientRepository implements IIngredientRepository {

    async getAllIngredients(): Promise<Ingredient[]> {
        try {
            const query: string = 'SELECT * FROM sastojak';

            const [Rows] = await db.execute<RowDataPacket[]>(query, []);

            if (Rows.length === 0) {
                return [];
            }

            const ingredients: Ingredient[] = Rows.map(
                (row) => new Ingredient(
                    row.idSastojak,
                    row.nazivSastojka,
                    row.kategorija,
                    row.alergen ==="YES"
                )
            );
            return ingredients;
        }
        catch {
            return [];
        }
    }
    async getAllIngredientsFromGroup(groupName:string): Promise<Ingredient[]> {
         try {
            const query: string = 'SELECT * FROM sastojak WHERE kategorija = ?';

            const [Rows] = await db.execute<RowDataPacket[]>(query, [groupName]);

            if (Rows.length === 0) {
                return [];
            }

            const ingredients: Ingredient[] = Rows.map(
                (row) => new Ingredient(
                    row.idSastojak,
                    row.nazivSastojka,
                    row.kategorija,
                    row.alergen ==="YES"
                )
            );
            return ingredients;
        }
        catch {
            return [];
        }
    }
    async create(ingredientName:string, category :string, alergen:boolean): Promise<Ingredient> {
        try {
            const query: string = 'INSERT INTO Sastojak(nazivSastojka,kategorija,alergen) values (?,?,?)';

            const [result] = await db.execute<ResultSetHeader>(query, [
                ingredientName, category, alergen ===true?"YES":"NO"
            ]);

            if (result.insertId) {
                return new Ingredient(result.insertId,ingredientName, category, alergen);
            }

            return new Ingredient();
        }
        catch {
            return new Ingredient();
        }
    }
    async getIngredientById(id: number): Promise<Ingredient> {
        try {
            const query: string = 'SELECT * FROM sastojak WHERE idSastojak = ?';

            const [Rows] = await db.execute<RowDataPacket[]>(query, [id]);

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

    async deleteIngredient(id: number): Promise<boolean> {
        try {
            const query: string = 'DELETE FROM Sastojak WHERE idSastojak = ?';
            const [result] = await db.execute<ResultSetHeader>(query, [id]);
            return result.affectedRows > 0;
        }
        catch {
            return false;
        }
    }

    async getAllIngredientGroups(): Promise<string[]> {
        try {
            const query: string = 'SELECT DISTINCT kategorija FROM sastojak';

            const [Rows] = await db.execute<RowDataPacket[]>(query, []);

            if (Rows.length === 0) {
                return [];
            }

            return Rows.map(row => row.kategorija as string);
        }
        catch {
            return [];
        }
    }
}

