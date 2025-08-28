import { Menu } from "../../models/Menu";

export interface IMenuRepository{
        create(menu: Menu): Promise<Menu>;
        getMenuById(id: number): Promise<Menu>;
        getMenuByName(name:string):Promise<Menu>;
        getDailyMenu():Promise<Menu>;
        updateMenuName(menu: Menu): Promise<Menu>;
        SetDailyMenu(menu:Menu):Promise<Boolean>;
        RemoveDailyMenu(menu:Menu):Promise<Boolean>;
}