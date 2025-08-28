import express from "express"
import cors from "cors"
import { AuthConstroller } from "./WebAPI/controllers/auth/AuthController";
import { AuthService } from "./Services/auth/AuthService";
import { IuserRepository } from "./Domain/repositories/users/IUserRepository";
import { UserRepository } from "./Database/repositories/users/UserRepository";
import { MealIngredientController } from "./WebAPI/controllers/meals/MealIngredientController";
import { MealService } from "./Services/meals/MealService";
import { MealRepository } from "./Database/repositories/meals/MealRepository";
import { IngredientRepository } from "./Database/repositories/Ingredients/IngredientRepository";
import { MealIngedientsRepo } from "./Database/repositories/meals/MealIngredientsRepo";
import { MealIngredientService } from "./Services/meals/MealIngredientService";
import { IngredientController } from "./WebAPI/controllers/ingredients/IngredientsControler";
import { IngredientService } from "./Services/ingredients/IngredientService";
import { MealController } from "./WebAPI/controllers/meals/MealController";
import { UserController } from "./WebAPI/controllers/users/UserController";
import { UserService } from "./Services/users/UserService";

require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());



const userRepo: IuserRepository = new UserRepository();
const mealRepo = new MealRepository();
const ingredRepo = new IngredientRepository();
const mealIngredRepo = new MealIngedientsRepo();


const mealService = new MealService(mealRepo);
const mealIngredientSer = new MealIngredientService(mealRepo,ingredRepo,mealIngredRepo);
const authService = new AuthService(userRepo);
const ingredientService = new IngredientService(ingredRepo);
const userService = new UserService(userRepo);

const authConstroller = new AuthConstroller(authService);
const mealIngredientController = new MealIngredientController(mealIngredientSer);
const ingredientController = new IngredientController(ingredientService);
const mealController = new MealController(mealService);
const userController = new UserController(userService);

app.use("/api/v1/auth", authConstroller.getRouther());
app.use("/api/v1/mealIng", mealIngredientController.getRouther());
app.use("/api/v1/ingredients", ingredientController.getRouther());
app.use("/api/v1/meals", mealController.getRouther());
app.use("/api/v1/users", userController.getRouther());



export default app;