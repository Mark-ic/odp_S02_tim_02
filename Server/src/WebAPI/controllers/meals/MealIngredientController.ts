import { Router, Request, Response } from "express";
import { IMealService } from "../../../Domain/services/meals/IMealService";
import { MealRequestValidator } from "../../validators/meals/MealRequestValidator";
import { authenticate } from "../../../Middlewares/authentification/AuthMiddleware";
import { authorize } from "../../../Middlewares/authorization/AuthorizeMiddleware";
import { IMealIngredientService } from "../../../Domain/services/meals/IMealngredientService";

export class MealIngredientController {
    private router: Router;
    private mealIngredientService: IMealIngredientService;

    constructor(mealIngredientService: IMealIngredientService) {
        this.router = Router();
        this.mealIngredientService = mealIngredientService;
        this.initializeRouters();
    }

    private initializeRouters() {
        this.router.post("/create", authenticate, authorize("admin"), this.create.bind(this));
        this.router.post("/getMealIng", authenticate, authorize("admin", "user"), this.getMealIngredients.bind(this));
    }

    private async getMealIngredients(req: Request, res: Response): Promise<void> {
        try {
            const { mealName } = req.body;
            const result = await this.mealIngredientService.getMealIngredients(mealName);
            res.status(200).json({ success: true, message: "Ingredients listed successfully!", data: result });
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }
    private async create(req: Request, res: Response): Promise<void> {
        try {
            const { mealName, price, image, prepTime, ingredients } = req.body;

            const validationOK = MealRequestValidator(mealName, price, image, prepTime);

            if (validationOK.success === false) {
                res.status(400).json({ success: false, massage: validationOK.message });
            }

            const result = await this.mealIngredientService.addMeal(mealName, price, image, prepTime, ingredients);
            if (result.idMeal !== 0) {
                res.status(200).json({ success: true, message: "Meal added successfully!", data: result });
                return;
            }
            else {
                res.status(444).json({ success: false, message: result.message });
                return;
            }
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }
    public getRouther() { return this.router; }

}