import express from "express";
import { signup } from "../controllers/auth";
const router = express.Router();
router.use("/signup", signup);
export default router;
