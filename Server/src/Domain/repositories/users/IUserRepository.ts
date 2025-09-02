import { Interface } from "readline";
import { User } from "../../models/User";
import { UserAuthDTO } from "../../DTOs/auth/UserAuthDTO";

export interface IuserRepository {
    create(user: User): Promise<User>;
    getUserById(id: number): Promise<User>;
    getByUsername(username: string): Promise<User>;
    updateUser(user: User): Promise<UserAuthDTO>;
    deleteUser(id: number): Promise<boolean>;
    userExists(id: number): Promise<boolean>;
    getAllUsers():Promise<UserAuthDTO[]>
}