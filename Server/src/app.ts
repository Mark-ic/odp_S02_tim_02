import express from "express"
import cors from "cors"
import { AuthConstroller } from "./WebAPI/controllers/AuthController";
import { AuthService } from "./Services/auth/AuthService";
import { IuserRepository } from "./Domain/repositories/users/IUserRepository";
import { UserRepository } from "./Database/repositories/users/UserRepository";

require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

const userRepo: IuserRepository = new UserRepository();

const authService = new AuthService(userRepo);

const authConstroller = new AuthConstroller(authService);

app.use("/api/v1", authConstroller.getRouther());

export default app;