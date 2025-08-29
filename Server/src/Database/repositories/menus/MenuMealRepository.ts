import { ResultSetHeader, RowDataPacket } from "mysql2";
import { Meal } from "../../../Domain/models/Meal";
import { Menu } from "../../../Domain/models/Menu";
import { IMenuMealRepo } from "../../../Domain/repositories/menus/IMenuMealRepo";
import db from "../../connection/DbConnectionPool";

export class MenuMealRepository implements IMenuMealRepo {
    async getBestSellingMeals(Menu: Menu): Promise<Meal[]> {
        try {
            const query = ' SELECT j.idJelo,j.nazivJela,j.cena,j.slika,j.vremePripreme,j.brojPorudzbina FROM jelo_meni jm JOIN jelo j ON jm.idJelo = j.idJelo WHERE jm.idMeni = ? order by j.brojPorudzbina DESC LIMIT 3';
            const [Rows] = await db.execute<RowDataPacket[]>(query, [Menu.idMenu]);
            if (Rows.length !== 0) {
                const meals: Meal[] = Rows.map(row =>
                    new Meal(
                        row.idJelo,
                        row.nazivJela,
                        row.cena,
                        row.slika,
                        row.vremePripreme,
                        row.brojPorudzbina
                    )
                );
                return meals;
            }
            return [];
        }
        catch {
            return [];
        }
    }
    async getNumberOfMealsOnMenu(Menu: Menu): Promise<number> {
        try {
            const query = 'SELECT COUNT(*) FROM Jelo_Meni where idMeni =?'
            return 0;
        }
        catch {
            return 0;
        }
    }
    async getAllMealsFromMenu(Menu: Menu): Promise<Meal[]> {
        try {
            const query = ' SELECT j.idJelo,j.nazivJela,j.cena,j.slika,j.vremePripreme,j.brojPorudzbina FROM jelo_meni jm JOIN jelo j ON jm.idJelo = j.idJelo WHERE jm.idMeni = ?;';
            const [Rows] = await db.execute<RowDataPacket[]>(query, [Menu.idMenu]);
            if (Rows.length !== 0) {
                const meals: Meal[] = Rows.map(row =>
                    new Meal(
                        row.idJelo,
                        row.nazivJela,
                        row.cena,
                        row.slika,
                        row.vremePripreme,
                        row.brojPorudzbina
                    )
                );
                return meals;
            }
            return [];
        }
        catch {
            return [];
        }

    }
    async addMealToMenu(Meal: Meal, Menu: Menu): Promise<Boolean> {
        try {
            const query = 'INSERT INTO Jelo_Meni(idJelo,idMeni) VALUES(?,?)';
            const [result] = await db.execute<ResultSetHeader>(query, [Meal.idMeal, Menu.idMenu]);
            if (result.affectedRows > 0) {
                return true;
            }
            return false;
        }
        catch {
            return false;
        }

    }
    async removeMealFromMenu(Meal: Meal, Menu: Menu): Promise<Boolean> {
        try {
            const query = 'DELETE FROM Jelo_Meni WHERE idJelo = ? AND idMeni =?';
            const [result] = await db.execute<ResultSetHeader>(query, [Meal.idMeal, Menu.idMenu]);
            if (result.affectedRows > 0) {
                return true;
            }
            return false;
        }
        catch {
            return false;
        }
    }
    async removeMealFromMenus(Meal: Meal): Promise<Boolean> {
        try {
            const query = 'DELETE FROM Jelo_Meni WHERE idJelo = ?';
            const [result] = await db.execute<ResultSetHeader>(query, [Meal.idMeal]);
            if (result.affectedRows > 0) {
                return true;
            }
            return false;
        }
        catch {
            return false;
        }
    }
    async removeMealsFromMenu(menu: Menu): Promise<Boolean> {
        try {
            const query = 'DELETE FROM Jelo_Meni WHERE idMeni = ?';
            const [result] = await db.execute<ResultSetHeader>(query, [menu.idMenu]);
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