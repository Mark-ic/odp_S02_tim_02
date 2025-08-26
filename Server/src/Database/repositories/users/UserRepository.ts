import { ResultSetHeader, RowDataPacket } from "mysql2";
import { User } from "../../../Domain/models/User";
import { IuserRepository } from "../../../Domain/repositories/users/IUserRepository";
import db from "../../connection/DbConnectionPool"

export class UserRepository implements IuserRepository {
    async create(user: User): Promise<User> {
        try {
            const query: string = 'INSERT INTO Korisnik(korisnickoIme,telefon,uloga,sifra) values (?,?,?,?)';

            const [result] = await db.execute<ResultSetHeader>(query, [
                user.username, user.phone, user.role, user.password
            ]);

            if (result.insertId) {
                return new User(result.insertId, user.username, user.phone, user.role, user.password);
            }

            return new User();
        }
        catch {
            return new User();
        }
    }
    async getUserById(id: number): Promise<User> {
        try {
            const query: string = 'SELECT * FROM Korisnik WHERE idKorisnik = ?';

            const [rows] = await db.execute<RowDataPacket[]>(query, [
                id
            ]);

            if (rows.length > 0) {
                const row = rows[0];
                return new User(row.idUser, row.username, row.phone, row.role, row.password);
            }

            return new User();
        }
        catch {
            return new User();
        }
    }
    async getByUsername(username: string): Promise<User> {
                try {
            const query: string = 'SELECT * FROM Korisnik WHERE korisnickoIme = ?';

            const [rows] = await db.execute<RowDataPacket[]>(query, [
                username
            ]);

            if (rows.length > 0) {
                const row = rows[0];
                return new User(row.idUser, row.username,row.phone, row.role, row.password);
            }

            return new User();
        }
        catch {
            return new User();
        }
    }
    async updateUser(user: User): Promise<User> {
        try{
            const query: string = 'UPDATE Korisnik SET username = ?,telefon = ?,uloga = ? ,sifra = ? WHERE idKorisnik = ?';

            const [result] = await db.execute<ResultSetHeader>(query, [
                user.username,user.phone, user.role, user.password,user.idUser
            ]);

            if (result.affectedRows > 0) {
                return user;
            }
             return new User();
        }
        catch{
            return new User(); 
        }
    }
    async deleteUser(id: number): Promise<boolean> {
        try {
            const query: string = 'DELETE FROM Korisnik WHERE idkorisnik = ?';
            const [result] =await db.execute<ResultSetHeader>(query,[id]);
            return result.affectedRows >0;
        }
        catch{
            return false;
        }
    }

    async userExists(id: number): Promise<boolean>{
         try {
            const query: string = 'SELECT COUT(*) as count from  Korisnik WHERE idkorisnik = ?';
            const [result] =await db.execute<RowDataPacket[]>(query,[id]);
            return result[0].count >0;
        }
        catch{
            return false;
        }
    }
}