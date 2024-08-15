import { Router } from "express";
import AuthRoutes from "./authRoutes.js";
const routes = Router();

routes.use('/api', AuthRoutes);

export default routes;