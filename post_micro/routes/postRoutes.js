import { Router } from "express";
import PostController from "../controller/PostController.js";
import authMiddleware from "../middleware/AuthMiddleware.js";

const PostRoutes = Router();

PostRoutes.get("/post", PostController.index);
PostRoutes.post("/post", authMiddleware, PostController.store);

export default PostRoutes;
