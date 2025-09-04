import { MenuRepository } from "../../Database/repositories/menus/MenuRepository";
import { Menu } from "../../Domain/models/Menu";
import { IMenuRepository } from "../../Domain/repositories/menus/IMenuRepository";
import { IMenuService } from "../../Domain/services/menus/IMenuService";

export class MenuService implements IMenuService{
    private menuRepo : IMenuRepository;
    public constructor(menuRepo: IMenuRepository){
        this.menuRepo=menuRepo;
    }

    async deleteMenu(menuName: string): Promise<Boolean> {
        console.log('Usao je u funkciju!');
        const exists = await this.menuRepo.getMenuByName(menuName);
        if(exists.idMenu === 0 ){
            return false;
        }
        console.log('Postoji meni sa datim imenom!');
        const result = await this.menuRepo.removeMenu(exists);
        return result;
    }
    
    async getAllMenus(): Promise<Menu[]> {
        return await this.menuRepo.getAllMenus();
    }

    async create(dailyMenu: boolean, menuName: string): Promise<Menu> {
        const exists = await this.menuRepo.getMenuByName(menuName);
        if(exists.idMenu !== 0 ){
            return new Menu();
        }
        const result = await this.menuRepo.create(new Menu (0,dailyMenu,menuName));
        if(result.idMenu !==0){
            return result;
        }
        return new Menu();
    }
    async getDailyMenu(): Promise<Menu> {
        return await this.menuRepo.getDailyMenu();
    }
    async updateMenuName(Oldname: string, newName: string): Promise<Menu> {
        const oldMenu = await this.menuRepo.getMenuByName(Oldname);

        if(oldMenu.idMenu === 0){
            return new Menu();
        }
        const result = await this.menuRepo.updateMenuName(new Menu(oldMenu.idMenu,oldMenu.dailyMenu,newName));
        if(result.idMenu !== 0 ){
            return result;
        }
        return new Menu();
    }
    async setDailyMenu(menuName: string): Promise<Boolean> {
        const menu = await this.menuRepo.getMenuByName(menuName);
        if(menu.idMenu ===0){
            return false;
        }
        const result = await this.menuRepo.SetDailyMenu(menu);
        return result;
    }
    async removeDailyMenu(menuName: string): Promise<Boolean> {
        const menu = await this.menuRepo.getMenuByName(menuName);
        if(menu.idMenu ===0){
            return false;
        }
        const result = await this.menuRepo.RemoveDailyMenu(menu);
        return result;
    }
    
}