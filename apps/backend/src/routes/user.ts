import express from "express";
import { followUser, searchUsers, unfollowUser } from "../controllers/user";
import authenticateUser from "../middlewares/auth";
const router = express.Router();
router.use(authenticateUser);
router.get("/search", searchUsers);
router.get("/follow/:userId", followUser);
router.get("/unfollow/:userId", unfollowUser);
export default router;
