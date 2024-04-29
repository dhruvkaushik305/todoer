import express from "express";
import { getUser, searchUsers } from "../controllers/user";
const router = express.Router();
router.get("/:id", getUser);
router.get("/search", searchUsers);
export default router;
