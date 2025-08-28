import { Router, Request, Response } from "express";
import { IIngredientService } from "../../../Domain/services/ingredients/IIngredientService";
import { authenticate } from "../../../Middlewares/authentification/AuthMiddleware";
import { authorize } from "../../../Middlewares/authorization/AuthorizeMiddleware";
import { IngredientsValidator } from "../../validators/ingredients/IngredientsValidator";

export class IngredientController {

    private router: Router;
    private ingredientService: IIngredientService;

    constructor(ingredientService: IIngredientService) {
        this.router = Router();
        this.ingredientService = ingredientService;
        this.initializeRouters();
    }

    private initializeRouters() {
        this.router.post("/createIngredient", authenticate, authorize("admin"), this.createIngredient.bind(this));
        this.router.post("/getAllIngredients", authenticate, this.getAllIngredients.bind(this));
        this.router.post("/getAllIngredientsFromGroup", authenticate, this.getAllIngredientsFromGroup.bind(this));
        this.router.post("/getAllIngredientGroups", authenticate, this.getAllIngredientGroups.bind(this));
    }

    private async getAllIngredients(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.ingredientService.getAllIngredients();
            res.status(200).json({ success: true, message: "Ingredient groups listed successfully!", data: result });
         }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async getAllIngredientsFromGroup(req: Request, res: Response): Promise<void> {
        try { 
            const { category } = req.body;
            const result = await this.ingredientService.getAllIngredientsFromGroup(category);
            res.status(200).json({ success: true, message: "Ingredients listed successfully!", data: result });
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async getAllIngredientGroups(req: Request, res: Response): Promise<void> {
        try { 
            const result = await this.ingredientService.getAllIngredientGroups();
            res.status(200).json({ success: true, message: "Ingredient groups listed successfully!", data: result });
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async createIngredient(req: Request, res: Response): Promise<void> {
        try {
            const { ingredientName, category, alergen } = req.body;

            const validationOK = IngredientsValidator(ingredientName, category, alergen);
            if (validationOK.success === false) {
                res.status(400).json({ success: false, message: validationOK.message });
                return;
            }
            const result = await this.ingredientService.create(ingredientName, category, alergen);

            if (result.idIngredient !== 0) {
                res.status(200).json({ success: true, message: "Ingredient added successfully", data: result });
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