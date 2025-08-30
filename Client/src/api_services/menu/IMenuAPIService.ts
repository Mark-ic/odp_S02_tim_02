import type { Menu } from "../../models/menu/Menu";

export interface IMenuAPIService {
  getAllMenus(token: string): Promise<Menu[]>;
  createMenu(token: string, dailyMenu: boolean, menuName: string): Promise<Menu>;
  getDailyMenu(token: string): Promise<Menu>;
  updateMenuName(token: string, oldMenuName: string, newMenuName: string): Promise<Menu>;
  setDailyMenu(token: string, menuName: string): Promise<boolean>;
  removeDailyMenu(token: string, menuName: string): Promise<boolean>;
}
