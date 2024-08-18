import { Router } from "express";
import UserController from "../controller/UserController.js";

const UserRoutes = Router();

UserRoutes.get("/getUser/:id", UserController.getUser);

export default UserRoutes;
