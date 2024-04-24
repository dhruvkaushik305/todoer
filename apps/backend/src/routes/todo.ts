import express from "express";
import { create, read, remove, update } from "../controllers/todo";
import authenticateUser from "../middlewares/auth";
const router = express.Router();
router.post("/create", authenticateUser, create);
router.get("/read", authenticateUser, read);
router.patch("/update", authenticateUser, update);
router.delete("/delete/:id", authenticateUser, remove);
export default router;
