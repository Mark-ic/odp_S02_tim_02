import { Router, Request, Response } from "express";
import { authenticate } from "../../../Middlewares/authentification/AuthMiddleware";
import { authorize } from "../../../Middlewares/authorization/AuthorizeMiddleware";
import { IOrderService } from "../../../Domain/services/orders/IOrderService";
import { OrderValidator } from "../../validators/orders/OrderValidator";

export class OrderController {
    private router: Router;
    private orderService: IOrderService;

    constructor(orderService: IOrderService) {
        this.router = Router();
        this.orderService = orderService;
        this.initializeRouters();
    }

    private initializeRouters() {
        this.router.post("/create", authenticate, this.create.bind(this));

        this.router.post("/getOrderById", authenticate, authorize("admin"), this.getOrderById.bind(this));
        this.router.post("/getOrdersFromUser", authenticate, authorize("admin"), this.getOrdersFromUser.bind(this));
        this.router.post("/getAllOrders", authenticate, authorize("admin"), this.getAllOrders.bind(this));
        this.router.post("/getOrderMeal", authenticate, authorize("admin"), this.getOrderMeal.bind(this));
        this.router.post("/getOrderUser", authenticate, authorize("admin"), this.getOrderUser.bind(this));
        

        this.router.post("/updateOrder", authenticate, authorize("admin"), this.updateOrder.bind(this));
        this.router.post("/updateOrderStatus", authenticate, authorize("admin"), this.updateOrderStatus.bind(this));

        this.router.post("/deleteOrder", authenticate, this.deleteOrder.bind(this));
        this.router.post("/deleteOrdersWithMeal", authenticate, authorize("admin"), this.deleteOrdersWithMeal.bind(this));
        this.router.post("/deleteOrdersFromUser", authenticate, authorize("admin"), this.deleteOrdersFromUser.bind(this));
    }

    private async create(req: Request, res: Response): Promise<void> {

        try {
            const { timeLeft, status, deliveryType, adress, idJelo, idKorisnik } = req.body;
            const validationOk = OrderValidator(timeLeft, status, deliveryType, adress, idJelo, idKorisnik);
            if (validationOk.success === false) {
                res.status(400).json({ success: false, message: validationOk.message });
                return;
            }

            const result = await this.orderService.create(timeLeft, status, deliveryType, adress, idJelo, idKorisnik);
            if (result.idOrder !== 0) {
                res.status(200).json({ success: true, message: "Order added  successfully!", });
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

    private async getOrderById(req: Request, res: Response): Promise<void> {
        try {

            const { orderId } = req.body;

            const result = await this.orderService.getOrderById(orderId);
            if (result.idOrder !== 0) {
                res.status(200).json({ success: true, message: "Order by id got successfully!", data: result });
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to resolve request" });
            }

        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }
    private async getOrderMeal(req: Request, res: Response): Promise<void> {
        try {

            const { orderId } = req.body;

            const result = await this.orderService.getOrderMeal(orderId);
            if (result.idMeal !== 0) {
                res.status(200).json({ success: true, message: "Meal from order got successfully!", data: result });
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to resolve request" });
            }

        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async getOrderUser(req: Request, res: Response): Promise<void> {
        try {

            const { orderId } = req.body;

            const result = await this.orderService.getOrderUser(orderId);
            if (result.id !== 0) {
                res.status(200).json({ success: true, message: "Order by id got successfully!", data: result });
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to resolve request" });
            }

        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async getOrdersFromUser(req: Request, res: Response): Promise<void> {
        try {
            const { username } = req.body;

            const result = await this.orderService.getOrdersFromUser(username);
            if (result.length !== 0) {
                res.status(200).json({ success: true, message: "Orders from user sent successfully!", data: result });
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to resolve request" });
            }

        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }

    }

    private async getAllOrders(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.orderService.getAllOrders();
            if (result.length !== 0) {
                res.status(200).json({ success: true, message: "All Orders sent successfully!", data: result });
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to resolve request" });
            }

        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }

    }

    private async updateOrder(req: Request, res: Response): Promise<void> {
        try {

            const { orderId, timeLeft, status, deliveryType, adress, idJelo, idKorisnik } = req.body;

            const validationOk = OrderValidator(timeLeft, status, deliveryType, adress, idJelo, idKorisnik);
            if (validationOk.success === false) {
                res.status(400).json({ success: false, message: validationOk.message });
                return;
            }

            const result = await this.orderService.updateOrder(orderId, timeLeft, status, deliveryType, adress, idJelo, idKorisnik);
            if (result.idOrder !== 0) {
                res.status(200).json({ success: true, message: "Order updated successfully!" });
            }
            else {
                res.status(500).json({ success: false, massage: "Server Error" });
            }

        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async updateOrderStatus(req: Request, res: Response): Promise<void> {
        try {
            const { orderId, status } = req.body;
            console.log(orderId, status);
            const result = await this.orderService.updateOrderStatus(orderId, status);
            if (result.idOrder !== 0) {
                res.status(200).json({ success: true, message: "Orders status updated successfully!", data: result });
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to resolve request" });
            }

        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async deleteOrder(req: Request, res: Response): Promise<void> {
        try {
            const { orderId } = req.body;

            const result = await this.orderService.deleteOrder(orderId);
            if (result === true) {
                res.status(200).json({ success: true, message: "Order removed successfully!", data: result });
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to resolve request" });
            }

        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async deleteOrdersWithMeal(req: Request, res: Response): Promise<void> {
        try {
            const { mealName } = req.body;

            const result = await this.orderService.deleteOrdersWithMeal(mealName);
            if (result === true) {
                res.status(200).json({ success: true, message: "Orders with specific meal removed successfully!", data: result });
            }
            else {
                res.status(500).json({ success: false, massage: "Server unable to resolve request" });
            }

        }
        catch {
            res.status(500).json({ success: false, massage: "Server Error" });
        }
    }

    private async deleteOrdersFromUser(req: Request, res: Response): Promise<void> {
        try {
            const { username } = req.body;

            const result = await this.orderService.deleteOrdersFromUser(username);
            if (result === true) {
                res.status(200).json({ success: true, message: "Orders with specific meal removed successfully!", data: result });
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