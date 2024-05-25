import express from "express";
import {
  followUser,
  getFollowCount,
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
router.get("/following/count", getFollowCount);
export default router;
