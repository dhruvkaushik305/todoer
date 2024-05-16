import express from "express";
import {
  create,
  read,
  remove,
  updateOrder,
  updateStatus,
  updateTodo,
} from "../controllers/todoController";
import authenticateUser from "../middlewares/authMiddleware";

const router = express.Router();
//Only authenticated users can access this route
router.use(authenticateUser);
router.post("/create", create);
router.get("/read/:id", read);
router.patch("/updateStatus", updateStatus);
router.patch("/updateTodo", updateTodo);
router.patch("/updateOrder/:id", updateOrder);
router.delete("/delete/:id", remove);
export default router;
