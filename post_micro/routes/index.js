import { Router } from "express";
import PostRoutes from "./postRoutes.js";
const routes = Router();

routes.use("/api", PostRoutes);

export default routes;
