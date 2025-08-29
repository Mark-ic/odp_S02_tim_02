import { ResultSetHeader, RowDataPacket } from "mysql2";
import { Meal } from "../../../Domain/models/Meal";
import { Order } from "../../../Domain/models/Order";
import { User } from "../../../Domain/models/User";
import { IOrderRepository } from "../../../Domain/repositories/orders/IOrderRepository";
import db from "../../connection/DbConnectionPool";
import { OrderStatus } from "../../../Domain/enums/orders/orderStatusEnum";
import { DeliveryType } from "../../../Domain/enums/orders/DeliveryTypeEnum";
import { UserAuthDTO } from "../../../Domain/DTOs/auth/UserAuthDTO";

export class OrderRepository implements IOrderRepository {
    
    async getOrderMeal(order: Order): Promise<Meal> {
        try {
            const query: string = 'SELECT j.idJelo,j.nazivJela,j.cena,j.slika,j.vremePripreme,j.brojPorudzbina FROM Porudzbina p JOIN Jelo j ON p.idJelo = j.idJelo WHERE p.idPorudzbina = ?';


            const [rows] = await db.execute<RowDataPacket[]>(query, [order.idOrder]);

            if (rows.length > 0) {
                const row = rows[0];
                return new Meal(row.idJelo,row.nazivJela,row.cena,row.slika,row.vremePripreme,row.brojPorudzbina);
            }

            return new Meal();
        }
        catch {
            return new Meal();
        }
    }

    async getOrderUser(order:Order): Promise<UserAuthDTO> {
        try {
            const query: string = 'SELECT k.idKorisnik, k.korisnickoIme,k.uloga FROM Porudzbina p JOIN Korisnik k ON p.idKorisnik = k.idKorisnik WHERE p.idPorudzbina = ?';

            const [rows] = await db.execute<RowDataPacket[]>(query, [order.idOrder]);

            if (rows.length > 0) {
                const row = rows[0];
                return new UserAuthDTO(row.idKorisnik,row.korisnickoIme,row.uloga);
            }

            return new UserAuthDTO();
        }
        catch {
            return new UserAuthDTO();
        }
    }

    async getAllOrders(): Promise<Order[]> {
        try {
            const query: string = 'SELECT * FROM porudzbina LIMIT 100';

            const [rows] = await db.execute<RowDataPacket[]>(query, []);

            if (rows.length > 0) {
                return rows.map(row => new Order(
                    row.idPorudzbina,
                    row.preostaloVreme,
                    row.status as OrderStatus,
                    row.nacinIsporuke as DeliveryType,
                    row.adresa,
                    row.idJelo,
                    row.idKorisnik
                ));
            }

            return [];
        }
        catch {
            return [];
        }
    }

    async create(order: Order): Promise<Order> {
        try {
            const query = 'INSERT INTO porudzbina (preostaloVreme,status,nacinIsporuke,adresa,idJelo,idKorisnik) VALUES (?,?,?,?,?,?)';
            const [result] = await db.execute<ResultSetHeader>(query, [
                order.timeLeft, order.status, order.deliveryMethod, order.adress, order.idMeal, order.idUser]);

            if (result.insertId) {
                return new Order(result.insertId, order.timeLeft, order.status, order.deliveryMethod, order.adress, order.idMeal, order.idUser);
            }
            return new Order();
        }
        catch {
            return new Order();
        }

    }

    async getOrderById(id: number): Promise<Order> {
        try {
            const query: string = 'SELECT * FROM porudzbina WHERE idPorudzbina = ?';

            const [rows] = await db.execute<RowDataPacket[]>(query, [id]);

            if (rows.length > 0) {
                const row = rows[0];
                return new Order(row.idPorudzbina, row.preostaloVreme, row.status as OrderStatus, row.nacinIsporuke as DeliveryType, row.adresa, row.idJelo, row.idKorisnik);
            }

            return new Order();
        }
        catch {
            return new Order();
        }
    }

    async getOrdersFromUser(user: User): Promise<Order[]> {
        try {
            const query: string = 'SELECT * FROM porudzbina WHERE idKorisnik = ?';

            const [rows] = await db.execute<RowDataPacket[]>(query, [user.idUser]);

            if (rows.length > 0) {
                return rows.map(row => new Order(
                    row.idPorudzbina,
                    row.preostaloVreme,
                    row.status as OrderStatus,
                    row.nacinIsporuke as DeliveryType,
                    row.adresa,
                    row.idJelo,
                    row.idKorisnik
                ));
            }

            return [];
        }
        catch {
            return [];
        }
    }

    async updateOrder(order: Order): Promise<Order> {
        try {
            const query = 'UPDATE porudzbina SET preostaloVreme = ?, status = ?, nacinIsporuke =?, adresa = ?, idJelo = ?, idKorisnik = ? WHERE idPorudzbina = ?';
            const [result] = await db.execute<ResultSetHeader>(query, [
                order.timeLeft, order.status, order.deliveryMethod, order.adress, order.idMeal, order.idUser, order.idOrder]);

            if (result.affectedRows != 0) {
                return order;
            }
            return new Order();
        }
        catch {
            return new Order();
        }
    }

    async updateOrderStatus(order: Order): Promise<Order> {
        try {
            const query = 'UPDATE porudzbina SET  status = ? WHERE idPorudzbina = ?';
            const [result] = await db.execute<ResultSetHeader>(query, [
                order.status, order.idOrder]);

            if (result.affectedRows != 0) {
                return order;
            }
            return new Order();
        }
        catch {
            return new Order();
        }
    }

    async deleteOrder(order: Order): Promise<Boolean> {
        try {
            const query = 'DELETE FROM porudzbina WHERE idPorudzbina = ?';
            const [result] = await db.execute<ResultSetHeader>(query, [order.idOrder]);

            if (result.affectedRows != 0) {
                return true;
            }
            return false;
        }
        catch {
            return false;
        }
    }

    async deleteOrdersWithMeal(meal: Meal): Promise<Boolean> {
        try {
            const query = 'DELETE FROM porudzbina WHERE idjelo = ?';
            const [result] = await db.execute<ResultSetHeader>(query, [meal.idMeal]);

            if (result.affectedRows != 0) {
                return true;
            }
            return false;
        }
        catch {
            return false;
        }
    }

    async deleteOrdersFromUser(user: User): Promise<Boolean> {
        try {
            const query = 'DELETE FROM porudzbina WHERE idKorisnik = ?';
            const [result] = await db.execute<ResultSetHeader>(query, [user.idUser]);

            if (result.affectedRows != 0) {
                return true;
            }
            return false;
        }
        catch {
            return false;
        }
    }

}