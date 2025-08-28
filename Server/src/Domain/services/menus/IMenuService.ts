import { Menu } from "../../models/Menu";

export interface IMenuService {
    create(dailyMenu:boolean, menuName:string): Promise<Menu>;
    getMenuById(id: number): Promise<Menu>;
    getMenuByName(name: string): Promise<Menu>;
    getDailyMenu(): Promise<Menu>;
    updateMenuName(Oldname: string,newName:string): Promise<Menu>;
    setDailyMenu(menuName:string): Promise<Boolean>;
    removeDailyMenu(menuName: string): Promise<Boolean>;
}