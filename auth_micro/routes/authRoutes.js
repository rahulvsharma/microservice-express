import { Router } from "express";
import AuthController from "../controller/AuthController.js";

const AuthRoutes = Router();

AuthRoutes.post('/auth/register', AuthController.register);

export default AuthRoutes;