import express from "express";
import {
  create,
  read,
  remove,
  updateOrder,
  updateStatus,
  updateTodo,
} from "../controllers/todo";
import authenticateUser from "../middlewares/auth";
const router = express.Router();
router.use(authenticateUser);
router.post("/create", create);
router.get("/read", read);
router.patch("/updateStatus", updateStatus);
router.patch("/updateTodo", updateTodo);
router.patch("/updateOrder/:id", updateOrder);
router.delete("/delete/:id", remove);
export default router;
