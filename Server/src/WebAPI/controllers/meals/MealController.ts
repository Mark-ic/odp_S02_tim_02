import { Router, Request, Response } from "express";
import { IMealService } from "../../../Domain/services/meals/IMealService";
import { MealRequestValidator } from "../../validators/meals/MealRequestValidator";
import { authenticate } from "../../../Middlewares/authentification/AuthMiddleware";
import { authorize } from "../../../Middlewares/authorization/AuthorizeMiddleware";

export class MealController {
    private router: Router;
    private mealService: IMealService;

    constructor(authService: IMealService) {
        this.router = Router();
        this.mealService = authService;
        this.initializeRouters();
    }

    private initializeRouters() {
        this.router.post("/create", authenticate, authorize("admin"), this.create.bind(this));
    }

    private async create(req: Request, res: Response): Promise<void> {
        try {
            const { mealName, price, image, prepTime } = req.body;
            console.log("Start create meal");

            const validationOK = MealRequestValidator(mealName, price, image, prepTime);
            console.log("Validation done:", validationOK);

            if (validationOK.success === false) {
                res.status(400).json({ succsess: false, massage: validationOK.message });
            }

            const result = await this.mealService.addMeal(mealName, price, image, prepTime);
            console.log("MealService result:", result);

            console.log("End create meal");
            if (result.idMeal !== 0) {
                res.status(200).json({ succsess: true, message: "Register succsess!", data: result });
            }

            res.status(500).json({ succsess: false, massage: "Server Error" });
        }
        catch {
            res.status(500).json({ succsess: false, massage: "Server Error" });
        }
    }
    public getRouther() { return this.router; }

}