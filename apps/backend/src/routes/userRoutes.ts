import express from "express";
import {
  followUser,
  searchUsers,
  unfollowUser,
} from "../controllers/userController";
import authenticateUser from "../middlewares/authMiddleware";
const router = express.Router();
router.use(authenticateUser);
router.get("/search", searchUsers);
router.get("/follow/:userId", followUser);
router.get("/unfollow/:userId", unfollowUser);
export default router;
