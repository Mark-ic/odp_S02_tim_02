import axios from "axios";
import type { Menu } from "../../models/menu/Menu";
import type { IMenuAPIService } from "./IMenuAPIService";

const API_URL: string = import.meta.env.VITE_API_URL + "menu"; 

export const menuApi: IMenuAPIService = {
  async getAllMenus(token: string): Promise<Menu[]> {
    try {
      const res = await axios.post<{ success: boolean; message: string; data: Menu[] }>(
        `${API_URL}/getAllMenus`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.data || [];
    } catch (error) {
      console.error("Error getting all menus:", error);
      return [];
    }
  },

  async createMenu(token: string, dailyMenu: boolean, menuName: string): Promise<Menu> {
    try {
      const res = await axios.post<{ success: boolean; message: string; data?: Menu }>(
        `${API_URL}/create`,
        { dailyMenu, menuName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.data || { idMenu: 0, dailyMenu, menuName };
    } catch (error) {
      console.error("Error creating menu:", error);
      return { idMenu: 0, dailyMenu, menuName: "" };
    }
  },

  async getDailyMenu(token: string): Promise<Menu> {
    try {
      const res = await axios.post<{ success: boolean; message: string; data: Menu }>(
        `${API_URL}/getDailyMenu`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.data || { idMenu: 0, dailyMenu: false, menuName: "" };
    } catch (error) {
      console.error("Error getting daily menu:", error);
      return { idMenu: 0, dailyMenu: false, menuName: "" };
    }
  },

  async updateMenuName(token: string, oldMenuName: string, newMenuName: string): Promise<Menu> {
    try {
      const res = await axios.post<{ success: boolean; message: string; data: Menu }>(
        `${API_URL}/updateMenuName`,
        { oldMenuName, newMenuName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.data || { idMenu: 0, dailyMenu: false, menuName: "" };
    } catch (error) {
      console.error("Error updating menu name:", error);
      return { idMenu: 0, dailyMenu: false, menuName: "" };
    }
  },

  async setDailyMenu(token: string, menuName: string): Promise<boolean> {
    try {
      const res = await axios.post<{ success: boolean; message: string }>(
        `${API_URL}/setDailyMenu`,
        { menuName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.success;
    } catch (error) {
      console.error("Error setting daily menu:", error);
      return false;
    }
  },

  async removeDailyMenu(token: string, menuName: string): Promise<boolean> {
    try {
      const res = await axios.post<{ success: boolean; message: string }>(
        `${API_URL}/removeDailyMenu`,
        { menuName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.success;
    } catch (error) {
      console.error("Error removing daily menu:", error);
      return false;
    }
  },
};
