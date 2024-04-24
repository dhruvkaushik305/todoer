import express from "express";
import authRouter from "./auth";
import todoRouter from "./todo";
import GlobalError from "../middlewares/globalError";
const router = express.Router();
router.use("/auth", authRouter);
router.use("/todo", todoRouter);
router.use(GlobalError);
export default router;
