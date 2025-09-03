import { Router, Request, Response } from "express";
import { IMealService } from "../../../Domain/services/meals/IMealService";
import { authenticate } from "../../../Middlewares/authentification/AuthMiddleware";
import { authorize } from "../../../Middlewares/authorization/AuthorizeMiddleware";
import { MealRequestValidator } from "../../validators/meals/MealRequestValidator";

export class MealController {

    private router: Router;
    private mealService: IMealService;

    constructor(mealService: IMealService) {
        this.router = Router();
        this.mealService = mealService;
        this.initializeRouters();
    }

    private initializeRouters() {
        this.router.post("/getAllMeals", authenticate, this.getAllMeals.bind(this));
        this.router.post("/updateMeal", authenticate, authorize("admin"), this.updateMeal.bind(this));
        this.router.post("/removeMeal", authenticate, authorize("admin"), this.removeMeal.bind(this));
    }

    private async getAllMeals(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.mealService.getAllMeals();
            res.status(200).json({ success: true, message: "Meals listed successfully!", data: result });
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async updateMeal(req: Request, res: Response): Promise<void> {
        try {
            const { mealName, price, image, prepTime } = req.body;
            const validationOK = MealRequestValidator(mealName, price, image, prepTime);

            if (validationOK.success === false) {
                res.status(400).json({ success: false, massage: validationOK.message });
            }

            const result = await this.mealService.updateMeal(mealName, price, image, prepTime);
            if (result.idMeal !== 0) {
                res.status(200).json({ success: true, message: "Meal changed successfully!", data: result });
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to resolve request" });
            }
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }

    }

    private async removeMeal(req: Request, res: Response): Promise<void> {
        try {
            const { mealName } = req.body;
            const result = await this.mealService.removeMeal(mealName);

            if (result === true) {
                res.status(200).json({ success: true, message: "Meal removed successfully!" });
            }
            else {
                res.status(500).json({ success: false, massage: "Server Error" });
            }
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    public getRouther() { return this.router; }

}
