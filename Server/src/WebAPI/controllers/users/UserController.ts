import { Router, Request, Response } from "express";
import { IUserService } from "../../../Domain/services/user/IUserService";
import { authenticate } from "../../../Middlewares/authentification/AuthMiddleware";
import { authorize } from "../../../Middlewares/authorization/AuthorizeMiddleware";
import { AuthRequestValidators } from "../../validators/auth/AuthRequestValidator";

export class UserController {
    private router: Router;
    private userService: IUserService;

    constructor(userService: IUserService) {
        this.router = Router();
        this.userService = userService;
        this.initializeRouters();
    }

    private initializeRouters() {
        this.router.post("/changeUser", authenticate, authorize("admin"), this.changeUser.bind(this));
        this.router.post("/deleteUser", authenticate, authorize("admin"), this.deleteUser.bind(this));

    }

    private async changeUser(req: Request, res: Response): Promise<void> {
        try {
            const { username, phone, role, password } = req.body;
            const validationOK = AuthRequestValidators(username,password,phone.role);

            if (validationOK.success === false) {
                res.status(400).json({ success: false, massage: validationOK.message });
                return;
            }
            const result = await this.userService.changeUser(username, phone, role, password);

            if (result.id !== 0) {
                res.status(200).json({ success: true, message: "User changed successfully!", data: result });
                return;
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to resolve request" });
                return;
            }
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            /*
            const { mealName, price, image, prepTime } = req.body;
            const validationOK = MealRequestValidator(mealName, price, image, prepTime);

            if (validationOK.success === false) {
                res.status(400).json({ success: false, massage: validationOK.message });
            }

            const result = await this.mealService.updateMeal(mealName, prepTime, image, prepTime);
            if (result.idMeal !== 0) {
                res.status(200).json({ success: true, message: "Meal changed successfully!", data: result });
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to resolve request" });
            }
                */
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }
    public getRouther() { return this.router; }
}