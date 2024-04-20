import express from "express";
import {
  checkUsername,
  login,
  signup,
  userIsLogged,
} from "../controllers/auth";
import authenticateUser from "../middlewares/auth";
const router = express.Router();
router.post("/signup", signup);
router.get("/checkUsername/:username", checkUsername);
router.post("/login", login);
router.get("/isLogged", authenticateUser, userIsLogged);
export default router;
