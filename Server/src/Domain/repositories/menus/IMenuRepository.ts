import { Menu } from "../../models/Menu";

export interface IMenuRepository{
        create(menu: Menu): Promise<Menu>;
        getMenuById(id: number): Promise<Menu>;
        updateMenu(menu: Menu): Promise<Menu>;
        deleteMenu(id: number): Promise<boolean>;
}