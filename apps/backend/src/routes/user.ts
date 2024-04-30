import express from "express";
import { getUser, searchUsers } from "../controllers/user";
import authenticateUser from "../middlewares/auth";
const router = express.Router();
router.use(authenticateUser);
router.get("/search", searchUsers);
router.get("/:id", getUser);
export default router;
