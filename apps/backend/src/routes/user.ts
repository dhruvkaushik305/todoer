import express from "express";
import { searchUsers } from "../controllers/user";
const router = express.Router();
router.get("/search", searchUsers);
export default router;
