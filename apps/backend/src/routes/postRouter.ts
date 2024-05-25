import express from "express";
import { cheerPost, unCheerPost } from "../controllers/postController";
import authenticateUser from "../middlewares/authMiddleware";
const router = express.Router();
router.use(authenticateUser);
router.post("/cheer/:id", cheerPost);
router.post("/unCheer/:id", unCheerPost);
export default router;
