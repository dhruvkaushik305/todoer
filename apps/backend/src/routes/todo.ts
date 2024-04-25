import express from "express";
import {
  create,
  read,
  remove,
  updateOrder,
  updateStatus,
} from "../controllers/todo";
import authenticateUser from "../middlewares/auth";
const router = express.Router();
router.post("/create", authenticateUser, create);
router.get("/read", authenticateUser, read);
router.patch("/updateStatus", authenticateUser, updateStatus);
router.patch("/updateOrder", authenticateUser, updateOrder);
router.delete("/delete/:id", authenticateUser, remove);
export default router;
