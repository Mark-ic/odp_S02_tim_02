import { Router, Request, Response } from "express";
import { IAuthService } from "../../../Domain/services/auth/IAuthService";
import { AuthRequestValidators } from "../../validators/auth/AuthRequestValidator";
import jwt from "jsonwebtoken";

export class AuthConstroller {
    private router: Router;
    private authUser: IAuthService;

    constructor(authService: IAuthService) {
        this.router = Router();
        this.authUser = authService;
        this.initializeRouters();
    }

    private initializeRouters() {
        this.router.post("/login", this.login.bind(this));
        this.router.post("/register", this.register.bind(this));
    }

    private async login(req: Request, res: Response): Promise<void> {
        try {
            const { username, password } = req.body;
            const validationOK = AuthRequestValidators(username, password);
            if (validationOK.success === false) {
                res.status(400).json({ success: false, message: validationOK.message });
                return;
            }

            const result = await this.authUser.login(username, password);

            const token = jwt.sign(
                {
                    id: result.id,
                    username: result.username,
                    role: result.role,
                }, process.env.JWT_SECRET ?? "", { expiresIn: '6h' });

            if (result.status === "OK") {
                res.status(200).json({ success: true, message: "Login success!", data: token });
            }
            else if (result.status === "BAD_PASSWORD") {
                res.status(401).json({ success: false, message: "Wrong password!"});
            }
            else if (result.status === "NO_USER") {
                res.status(404).json({ success: false, message: "User not found!"});
            }
            else {
                res.status(418).json({ success: false, message: "Login Failed!" });
            }
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async register(req: Request, res: Response): Promise<void> {
        try {
            const { username, phone, role, password } = req.body;
            const validationOK = AuthRequestValidators(username, password, phone, role);
            if (validationOK.success === false) {
                res.status(400).json({ success: false, message: validationOK.message });
                return;
            }

            const result = await this.authUser.register(username, phone, role, password);
            const token = jwt.sign(
                {
                    id: result.id,
                    username: result.username,
                    role: result.role,
                }, process.env.JWT_SECRET ?? "", { expiresIn: '6h' });

            if (result.id !== 0) {
                res.status(200).json({ success: true, message: "Register succsess!", data: token });
            }
            else {
                res.status(409).json({ success: false, message: "Profile with same username already exists!" });
            }
        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    public getRouther() { return this.router; }
}