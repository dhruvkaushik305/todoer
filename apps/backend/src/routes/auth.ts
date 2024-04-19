import express from "express";
import { checkUsername, login, signup } from "../controllers/auth";
const router = express.Router();
router.post("/signup", signup);
router.get("/checkUsername/:username", checkUsername);
router.post("/login", login);
export default router;
