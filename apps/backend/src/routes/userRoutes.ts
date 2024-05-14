import express from "express";
import {
  followUser,
  getFollowing,
  searchUsers,
  unfollowUser,
} from "../controllers/userController";
import authenticateUser from "../middlewares/authMiddleware";
const router = express.Router();
router.use(authenticateUser);
router.get("/search", searchUsers);
router.get("/follow/:userId", followUser);
router.get("/unfollow/:userId", unfollowUser);
router.get("/following", getFollowing);
export default router;
