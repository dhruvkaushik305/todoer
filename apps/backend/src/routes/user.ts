import express from "express";
import { getUser, searchUsers } from "../controllers/user";
import authenticateUser from "../middlewares/auth";
const router = express.Router();
router.use(authenticateUser);
router.get("/:id", getUser);
router.get("/search", searchUsers);
export default router;
