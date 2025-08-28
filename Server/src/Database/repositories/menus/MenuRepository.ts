import { ResultSetHeader, RowDataPacket } from "mysql2";
import { Menu } from "../../../Domain/models/Menu";
import { IMenuRepository } from "../../../Domain/repositories/menus/IMenuRepository";
import db from "../../connection/DbConnectionPool";

export class MenuRepository implements IMenuRepository {
    async getDailyMenu(): Promise<Menu> {
        try {
            const query = 'SELECT * FROM meni where dnevniMeni=?';
            const [Rows] = await db.execute<RowDataPacket[]>(query, ["YES"]);
            if (Rows.length > 0) {
                const row = Rows[0];
                return new Menu(row.idMeni, row.dnevniMeni === "YES", row.nazivMenija);
            }
            return new Menu();
        } catch {
            return new Menu();
        }
    }

    async create(menu: Menu): Promise<Menu> {
        try {
            const query = 'INSERT INTO meni (dnevniMeni,nazivMenija) VALUES (?,?)';
            const [result] = await db.execute<ResultSetHeader>(query, [menu.dailyMenu === true ? "YES" : "NO", menu.menuName]);
            if (result.insertId === 0) {
                return new Menu();
            }
            return new Menu(result.insertId, menu.dailyMenu, menu.menuName);
        }
        catch {
            return new Menu();
        }

    }

    async getMenuById(id: number): Promise<Menu> {
        try {
            const query: string = 'SELECT * FROM meni WHERE idMeni = ?';

            const [Rows] = await db.execute<RowDataPacket[]>(query, [
                id
            ]);

            if (Rows.length > 0) {
                const row = Rows[0];
                return new Menu(row.idMeni, row.dnevniMeni === "YES", row.nazivMenija);;
            }

            return new Menu();
        }
        catch {
            return new Menu();
        }
    }

    async getMenuByName(name: string): Promise<Menu> {
        try {
            const query: string = 'SELECT * FROM meni WHERE nazivMenija = ?';

            const [Rows] = await db.execute<RowDataPacket[]>(query, [
                name
            ]);

            if (Rows.length > 0) {
                const row = Rows[0];
                return new Menu(row.idMeni, row.dnevniMeni === "YES", row.nazivMenija);;
            }

            return new Menu();
        }
        catch {
            return new Menu();
        }
    }

    async updateMenuName(menu: Menu): Promise<Menu> {
        try {
            const query: string = 'UPDATE meni SET nazivMenija = ? WHERE idMeni = ?';

            const [result] = await db.execute<ResultSetHeader>(query, [menu.menuName,menu.idMenu]);

            if (result.affectedRows > 0) {
                return new Menu(result.insertId,menu.dailyMenu ,menu.menuName);
            }
            return new Menu();
        }
        catch {
            return new Menu();
        }
    }

    async SetDailyMenu(menu: Menu): Promise<Boolean> {
        try {
            const query: string = 'UPDATE meni SET dnevniMeni=? WHERE nazivMenija=?';

            const [result] = await db.execute<ResultSetHeader>(query, ["YES", menu.menuName]);

            return result.affectedRows > 0;
        }
        catch {
            return false;
        }
    }

    async RemoveDailyMenu(menu: Menu): Promise<Boolean> {
        try {
            const query: string = 'UPDATE meni SET dnevniMeni=? WHERE nazivMenija=?';

            const [result] = await db.execute<ResultSetHeader>(query, ["NO", menu.menuName]);

            return result.affectedRows > 0;
        }
        catch {
            return false;
        }
    }
}