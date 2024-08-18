import { Router } from "express";
import AuthRoutes from "./authRoutes.js";
import UserRoutes from "./userRoutes.js";
const routes = Router();

routes.use("/api", AuthRoutes);
routes.use("/api", UserRoutes);

export default routes;
