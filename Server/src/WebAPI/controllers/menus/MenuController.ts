import { Router, Request, Response } from "express";
import { IMenuService } from "../../../Domain/services/menus/IMenuService";
import { authenticate } from "../../../Middlewares/authentification/AuthMiddleware";
import { authorize } from "../../../Middlewares/authorization/AuthorizeMiddleware";

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
        this.router.post("/getMenuById", authenticate, authorize("admin"), this.getMenuById.bind(this));
        this.router.post("/getMenuByName", authenticate, authorize("admin"), this.getMenuByName.bind(this));
        this.router.post("/getDailyMenu", authenticate, authorize("admin"), this.getDailyMenu.bind(this));
        this.router.post("/updateMenuName", authenticate, authorize("admin"), this.updateMenuName.bind(this));
        this.router.post("/setDailyMenu", authenticate, authorize("admin"), this.setDailyMenu.bind(this));
        this.router.post("/removeDailyMenu", authenticate, authorize("admin"), this.removeDailyMenu.bind(this));

    }

    private async getMenuByName(req: Request, res: Response): Promise<void> {
        try {

            const { username } = req.body;
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async getMenuById(req: Request, res: Response): Promise<void> {
        try {

            const { username } = req.body;
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async getDailyMenu(req: Request, res: Response): Promise<void> {
        try {

            const { username } = req.body;
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async updateMenuName(req: Request, res: Response): Promise<void> {
        try {

            const { username } = req.body;
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async setDailyMenu(req: Request, res: Response): Promise<void> {
        try {

            const { username } = req.body;
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async removeDailyMenu(req: Request, res: Response): Promise<void> {
        try {

            const { username } = req.body;
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async create(req: Request, res: Response): Promise<void> {
        try {

            const { username } = req.body;
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }
    public getRouther() { return this.router; }
}