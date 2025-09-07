import type { UserDto } from "../../models/users/UserDto";

export interface IUserAPIService {
    getAllUsers(token: string): Promise<UserDto[]>;
    changeUser(token: string, user: { username: string; phone: string; role: string; password: string }): Promise<UserDto | null>;
    deleteUser(token: string, username: string): Promise<boolean>;
}
