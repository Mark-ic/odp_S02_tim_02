import { Router, Request, Response } from "express";
import { IMealService } from "../../../Domain/services/meals/IMealService";
import { authenticate } from "../../../Middlewares/authentification/AuthMiddleware";
import { authorize } from "../../../Middlewares/authorization/AuthorizeMiddleware";
import { MealRequestValidator } from "../../validators/meals/MealRequestValidator";
import { IMenuMealService } from "../../../Domain/services/menus/IMenuMealService";

export class MenuMealController {

    private router: Router;
    private menuMealService: IMenuMealService;

    constructor(menuMealService: IMenuMealService) {
        this.router = Router();
        this.menuMealService = menuMealService;
        this.initializeRouters();
    }

    private initializeRouters() {

        this.router.post("/getAllMealsFromMenu", authenticate, this.getAllMealsFromMenu.bind(this));
        this.router.post("/getBestSellingMeals", authenticate, this.getBestSellingMeals.bind(this));


        this.router.post("/addMealToMenu", authenticate, authorize("admin"), this.addMealToMenu.bind(this));

        this.router.post("/removeMealFromMenu", authenticate, authorize("admin"), this.removeMealFromMenu.bind(this));

        this.router.post("/removeMealFromMenus", authenticate, authorize("admin"), this.removeMealFromMenus.bind(this));
        this.router.post("/removeMealsFromMenu", authenticate, authorize("admin"), this.removeMealsFromMenu.bind(this));
    }

     private async getBestSellingMeals(req: Request, res: Response): Promise<void> {
        try {
            const { menuName } = req.body;
            const result = await this.menuMealService.getBestSellingMeals(menuName);
            res.status(200).json({ success: true, message: "Best selling meals listed successfully!", data: result });
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }


    private async getAllMealsFromMenu(req: Request, res: Response): Promise<void> {
        try {
            const { menuName } = req.body;
            const result = await this.menuMealService.getAllMealsFromMenu(menuName);
            res.status(200).json({ success: true, message: "Meals listed successfully!", data: result });
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async addMealToMenu(req: Request, res: Response): Promise<void> {
        try {

            const { mealName, menuName } = req.body;

            const result = await this.menuMealService.addMealToMenu(mealName, menuName);
            if (result === true) {
                res.status(200).json({ success: true, message: "Meal added to Menu successfully!", data: result });
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to resolve request" });
            }

        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }

    }

    private async removeMealFromMenu(req: Request, res: Response): Promise<void> {
        try {

            const { mealName, menuName } = req.body;

            const result = await this.menuMealService.removeMealFromMenu(mealName, menuName);
            if (result === true) {
                res.status(200).json({ success: true, message: "Meal removed from Menu successfully!", data: result });
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to resolve request" });
            }

        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async removeMealFromMenus(req: Request, res: Response): Promise<void> {
        try {

            const { mealName } = req.body;

            const result = await this.menuMealService.removeMealFromMenus(mealName);
            if (result === true) {
                res.status(200).json({ success: true, message: "Meal removed from all Menus successfully!", data: result });
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to resolve request" });
            }

        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async removeMealsFromMenu(req: Request, res: Response): Promise<void> {
        try {

            const { menuName } = req.body;

            const result = await this.menuMealService.removeMealsFromMenu(menuName);
            if (result === true) {
                res.status(200).json({ success: true, message: "Meals removed from Menu successfully!", data: result });
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to resolve request" });
            }

        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    public getRouther() { return this.router; }

}
