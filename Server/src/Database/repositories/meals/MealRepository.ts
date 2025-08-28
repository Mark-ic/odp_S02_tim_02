import { ResultSetHeader, RowDataPacket } from "mysql2";
import { Meal } from "../../../Domain/models/Meal";
import { IMealRepository } from "../../../Domain/repositories/meals/IMealRepository";
import db from "../../connection/DbConnectionPool"

export class MealRepository implements IMealRepository {

    async create(meal: Meal): Promise<Meal> {
        try {
            const query: string = 'INSERT INTO jelo(nazivJela,cena,slika,vremePripreme,brojPorudzbina) values (?,?,?,?,0)';
            const [result] = await db.execute<ResultSetHeader>(query, [meal.mealName, meal.price, meal.image, meal.prepTime]);
            if (result.insertId) {
                return new Meal(result.insertId, meal.mealName, meal.price, meal.image, meal.prepTime, 0);
            }
            return new Meal();
        }
        catch {
            return new Meal();
        }
    }

    async getMealById(id: number): Promise<Meal> {
        try {
            const query: string = 'SELECT * FROM jelo WHERE idJelo = ?';

            const [rows] = await db.execute<RowDataPacket[]>(query, [id]);

            if (rows.length > 0) {
                const row = rows[0];
                return new Meal(row.idJelo, row.nazivJela, row.cena, row.slika, row.vremePripreme, row.brojPorudzbina);
            }

            return new Meal();
        }
        catch {
            return new Meal();
        }
    }

    async getMealByName(name: string): Promise<Meal> {
        try {
            const query: string = 'SELECT * FROM jelo WHERE nazivJela = ?';

            const [rows] = await db.execute<RowDataPacket[]>(query, [name]);
            if (rows.length > 0) {
                const row = rows[0];
                return new Meal(row.idJelo, row.nazivJela, row.cena, row.slika, row.vremePripreme, row.brojPorudzbina);
            }

            return new Meal();
        }
        catch {
            return new Meal();
        }
    }

    async getAllMeals(): Promise<Meal[]> {
        try {
            const query: string = 'SELECT * FROM jelo';

            const [rows] = await db.execute<RowDataPacket[]>(query);

            return (rows as RowDataPacket[]).map(row => new Meal(
                row.idJelo,
                row.nazivJela,
                row.cena, row.slika,
                row.vremePripreme,
                row.brojPorudzbina
            ));
        }
        catch {
            return [];
        }
    }

    async updateMeal(meal: Meal): Promise<Meal> {
        try {
            const query: string = 'UPDATE Jelo SET nazivJela = ?,cena = ?,slika = ? ,vremePripreme = ?, brojPorudzbina = ? WHERE idJelo = ?';

            const [result] = await db.execute<ResultSetHeader>(query, [
                 meal.mealName, meal.price, meal.image, meal.prepTime, meal.numberOfOrders,meal.idMeal
            ]);

            if (result.affectedRows > 0) {
                return meal;
            }
            return new Meal();
        }
        catch {
            return new Meal();
        }
    }

    async deleteMeal(id: number): Promise<boolean> {
        try {
            const query: string = 'DELETE FROM Jelo WHERE idJelo = ?';
            const [result] = await db.execute<ResultSetHeader>(query, [id]);
            return result.affectedRows > 0;
        }
        catch {
            return false;
        }
    }

}