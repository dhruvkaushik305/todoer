import express from "express";
import { searchUsers } from "../controllers/user";
import authenticateUser from "../middlewares/auth";
const router = express.Router();
router.use(authenticateUser);
router.get("/search", searchUsers);
export default router;
