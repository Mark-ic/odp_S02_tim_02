import { Router, Request, Response } from "express";
import { IMenuService } from "../../../Domain/services/menus/IMenuService";
import { authenticate } from "../../../Middlewares/authentification/AuthMiddleware";
import { authorize } from "../../../Middlewares/authorization/AuthorizeMiddleware";
import { MenuValidator } from "../../validators/menus/MenuValidator";

export class MenuControler {
    private router: Router;
    private menuService: IMenuService;

    constructor(menuService: IMenuService) {
        this.router = Router();
        this.menuService = menuService;
        this.initializeRouters();
    }

    private initializeRouters() {
        this.router.post("/create", authenticate, authorize("admin"), this.create.bind(this));

        this.router.post("/getDailyMenu", authenticate, this.getDailyMenu.bind(this));
        this.router.post("/getAllMenus", authenticate, this.getAllMenus.bind(this));


        this.router.post("/updateMenuName", authenticate, authorize("admin"), this.updateMenuName.bind(this));
        this.router.post("/setDailyMenu", authenticate, authorize("admin"), this.setDailyMenu.bind(this));

        this.router.post("/removeDailyMenu", authenticate, authorize("admin"), this.removeDailyMenu.bind(this));
        this.router.post("/deleteMenu", authenticate, authorize("admin"), this.deleteMenu.bind(this));


    }


    private async deleteMenu(req: Request, res: Response): Promise<void> {
        try {
            const { menuName } = req.body;
            const result = await this.menuService.deleteMenu(menuName);
            if (result === true) {
                res.status(200).json({ success: true, message: "Menu removed  successfully!", });
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to execude command" });
            }
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }
    private async getAllMenus(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.menuService.getAllMenus();
            if (result.length > 0) {
                res.status(200).json({ success: true, message: "Daily Menu returned successfully!", data: result });
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to execude command" });
            }
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }
    private async getDailyMenu(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.menuService.getDailyMenu();
            if (result.idMenu !== 0) {
                res.status(200).json({ success: true, message: "Daily Menu returned successfully!", data: result });
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to execude command" });
            }
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async updateMenuName(req: Request, res: Response): Promise<void> {
        try {
            const { oldMenuName, newMenuName } = req.body;
            const result = await this.menuService.updateMenuName(oldMenuName, newMenuName);
            if (result.idMenu !== 0) {
                res.status(200).json({ success: true, message: "Menu name changed successfully!", data: result });
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to execude command" });
            }
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async setDailyMenu(req: Request, res: Response): Promise<void> {
        try {
            const { menuName } = req.body;
            const result = await this.menuService.setDailyMenu(menuName);
            if (result === true) {
                res.status(200).json({ success: true, message: "Menu set to Daily successfully!", });
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to execude command" });
            }
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async removeDailyMenu(req: Request, res: Response): Promise<void> {
        try {
            const { menuName } = req.body;
            const result = await this.menuService.removeDailyMenu(menuName);
            if (result === true) {
                res.status(200).json({ success: true, message: "Menu is not Daily anymore  successfully!", });
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to execude command" });
            }
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async create(req: Request, res: Response): Promise<void> {
        try {
            const { menuName, dailyMenu } = req.body;
            const validationOk = MenuValidator(menuName, dailyMenu);
            if (validationOk.success === false) {
                res.status(400).json({ success: false, message: validationOk.message });
                return;
            }

            const result = await this.menuService.create(dailyMenu, menuName);
            if (result.idMenu !== 0) {
                res.status(200).json({ success: true, message: "Menu added  successfully!", });
                return;
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to execude command" });
                return;
            }
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }
    public getRouther() { return this.router; }
}