import { UserType } from "@repo/types/User";
import { NextFunction, Request, Response } from "express";
import db from "@repo/db/prisma";
interface userRequest extends Request {
  user?: UserType;
}
export const searchUsers = async (
  req: userRequest,
  res: Response,
  next: NextFunction
) => {
  const { query } = req.query;
  if (!query) {
    return res
      .status(400)
      .json({ success: false, message: "Incomplete request" });
  }
  try {
    const users = await db.user.findMany({
      where: {
        username: { contains: query.toString() },
        NOT: { id: req.user?.id },
      },
    });
    if (users.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No users found" });
    }
    return res.status(200).json({ success: true, data: users });
  } catch (err) {
    next(err);
  }
};
export const followUser = async (
  req: userRequest,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;
  if (!userId) {
    return res
      .status(400)
      .json({ success: false, message: "Incomplete request" });
  }
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const isFollowing = await db.follow.findFirst({
      where: {
        followerId: userId,
        followingId: req.user?.id,
      },
    });
    if (isFollowing) {
      return res
        .status(400)
        .json({ success: false, message: "Already following user" });
    }
    await db.follow.create({
      data: {
        followerId: userId,
        followingId: req.user!.id,
      },
    });
    return res.status(200).json({ success: true, message: "Followed user" });
  } catch (err) {
    next(err);
  }
};
export const unfollowUser = async (
  req: userRequest,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;
  if (!userId) {
    return res
      .status(400)
      .json({ success: false, message: "Incomplete request" });
  }
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const isFollowing = await db.follow.findFirst({
      where: {
        followerId: userId,
        followingId: req.user?.id,
      },
    });
    if (!isFollowing) {
      return res
        .status(400)
        .json({ success: false, message: "User does not follow this account" });
    }
    await db.follow.delete({
      where: {
        id: isFollowing.id,
      },
    });
    return res.status(200).json({ success: true, message: "Unfollowed user" });
  } catch (err) {
    next(err);
  }
};
