import express from "express"
import cors from "cors"
import { AuthConstroller } from "./WebAPI/controllers/auth/AuthController";
import { AuthService } from "./Services/auth/AuthService";
import { IuserRepository } from "./Domain/repositories/users/IUserRepository";
import { UserRepository } from "./Database/repositories/users/UserRepository";
import { MealController } from "./WebAPI/controllers/meals/MealController";
import { MealService } from "./Services/meals/MealService";
import { MealRepository } from "./Database/repositories/meals/MealRepository";
import { IngredientRepository } from "./Database/repositories/Ingredients/IngredientRepository";

require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

const userRepo: IuserRepository = new UserRepository();

const authService = new AuthService(userRepo);

const authConstroller = new AuthConstroller(authService);

const mealRepo = new MealRepository();
const ingredRepo = new IngredientRepository();
const mealService = new MealService(mealRepo,ingredRepo);
const mealController = new MealController(mealService);

app.use("/api/v1/auth", authConstroller.getRouther());
app.use("/api/v1/meals", mealController.getRouther());

export default app;