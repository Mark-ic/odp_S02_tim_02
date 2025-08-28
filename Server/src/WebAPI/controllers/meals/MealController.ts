import { Router, Request, Response } from "express";
import { IMealService } from "../../../Domain/services/meals/IMealService";
import { authenticate } from "../../../Middlewares/authentification/AuthMiddleware";
import { authorize } from "../../../Middlewares/authorization/AuthorizeMiddleware";

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

    public getRouther() { return this.router; }

}
