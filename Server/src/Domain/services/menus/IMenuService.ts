import { Menu } from "../../models/Menu";

export interface IMenuService {
    create(dailyMenu:boolean, menuName:string): Promise<Menu>;
    
    getDailyMenu(): Promise<Menu>;
    getAllMenus():Promise<Menu[]>;
    
    updateMenuName(Oldname: string,newName:string): Promise<Menu>;
    setDailyMenu(menuName:string): Promise<Boolean>;
    removeDailyMenu(menuName: string): Promise<Boolean>;
    deleteMenu(menuName: string): Promise<Boolean>;
}