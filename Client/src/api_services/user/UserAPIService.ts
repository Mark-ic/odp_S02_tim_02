import axios from "axios";
import type { IUserAPIService } from "./IUserAPIService";
import type { UserDto } from "../../models/users/UserDto";

const API_URL = import.meta.env.VITE_API_URL + "users";

export const userApi: IUserAPIService = {
    async getAllUsers(token: string): Promise<UserDto[]> {
        try {
            const res = await axios.post<{ success: boolean; data: UserDto[] }>(
                `${API_URL}/getAllUsers`,
                {},
                { headers: { Authorization: `Bearer ${token}` } }
            );
            return res.data.data ?? [];
        } catch (error) {
            console.error("Error fetching all users:", error);
            return [];
        }
    },

    async changeUser(token: string, user: { username: string; phone: string; role: string; password: string }): Promise<UserDto | null> {
        try {
            const res = await axios.post<{ success: boolean; data: UserDto }>(
                `${API_URL}/changeUser`,
                user,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            return res.data.data ?? null;
        } catch (error) {
            console.error("Error changing user:", error);
            return null;
        }
    },

    async deleteUser(token: string, username: string): Promise<boolean> {
        try {
            const res = await axios.post<{ success: boolean }>(
                `${API_URL}/deleteUser`,
                { username },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            return res.data.success ?? false;
        } catch (error) {
            console.error("Error deleting user:", error);
            return false;
        }
    }
};
