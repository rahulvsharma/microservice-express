import { Router } from "express";
import AuthController from "../controller/AuthController.js";
import authMiddleware from "../middleware/AuthMiddleware.js";

const AuthRoutes = Router();

AuthRoutes.post("/auth/register", AuthController.register);
AuthRoutes.post("/auth/login", AuthController.login);
AuthRoutes.get("/auth/user", authMiddleware, AuthController.user);

export default AuthRoutes;
