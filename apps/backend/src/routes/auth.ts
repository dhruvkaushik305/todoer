import express from "express";
import { checkUsername, signup } from "../controllers/auth";
const router = express.Router();
router.post("/signup", signup);
router.get("/checkUsername/:username", checkUsername);
export default router;
