import express from "express";
import authRouter from "./auth";
import GlobalError from "../middlewares/globalError";
const router = express.Router();
router.use("/auth", authRouter);
router.use(GlobalError);
export default router;
