import { Interface } from "readline";
import { User } from "../../models/User";

export interface IuserRepository {
    create(user: User): Promise<User>;
    getUserById(id: number): Promise<User>;
    getByUsername(username: string): Promise<User>;
    updateUser(user: User): Promise<User>;
    deleteUser(id: number): Promise<boolean>;
    userExists(id: number): Promise<boolean>;
}