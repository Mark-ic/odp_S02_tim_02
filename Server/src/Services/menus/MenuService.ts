import { MenuRepository } from "../../Database/repositories/menus/MenuRepository";
import { Menu } from "../../Domain/models/Menu";
import { IMenuRepository } from "../../Domain/repositories/menus/IMenuRepository";
import { IMenuService } from "../../Domain/services/menus/IMenuService";

export class MenuService implements IMenuService{
    private menuRepo : IMenuRepository;
    public constructor(menuRepo: IMenuRepository){
        this.menuRepo=menuRepo;
    }


    async create(dailyMenu: boolean, menuName: string): Promise<Menu> {
        throw new Error("Method not implemented.");
    }
    async getMenuById(id: number): Promise<Menu> {
        throw new Error("Method not implemented.");
    }
    async getMenuByName(name: string): Promise<Menu> {
        throw new Error("Method not implemented.");
    }
    async getDailyMenu(): Promise<Menu> {
        throw new Error("Method not implemented.");
    }
    async updateMenuName(Oldname: string, newName: string): Promise<Menu> {
        throw new Error("Method not implemented.");
    }
    async setDailyMenu(menuName: string): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    async removeDailyMenu(menuName: string): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    
}