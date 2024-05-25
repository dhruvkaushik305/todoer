import { UserType } from "../../../../packages/types/userTypes";
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
  if (req.user?.id === userId) {
    return res
      .status(400)
      .json({ success: false, message: "You can't follow yourself" });
  }
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Requested User not found" });
    }
    const isFollowing = await db.follow.findFirst({
      where: {
        userId: userId,
        followedById: req.user?.id,
      },
    });
    if (isFollowing) {
      return res
        .status(400)
        .json({ success: false, message: "Already following user" });
    }
    await db.follow.create({
      data: {
        userId: userId,
        followedById: req.user!.id,
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
  if (req.user?.id === userId) {
    return res
      .status(400)
      .json({ success: false, message: "You can't unfollow yourself" });
  }
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Requested User not found" });
    }
    const isFollowing = await db.follow.findFirst({
      where: {
        userId: userId,
        followedById: req.user?.id,
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

export const getFollowing = async (
  req: userRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const followingUsers = await db.follow.findMany({
      where: {
        followedById: req.user?.id,
      },
      select: {
        user: true,
      },
    });
    return res.status(200).json({ success: true, data: followingUsers });
  } catch (err) {
    next(err);
  }
};

export const getFollowCount = async (
  req: userRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const followingCount = await db.follow.count({
      where: {
        followedById: req.user?.id,
      },
    });
    const followerCount = await db.follow.count({
      where: {
        userId: req.user?.id,
      },
    });
    return res
      .status(200)
      .json({ success: true, data: { followingCount, followerCount } });
  } catch (err) {
    next(err);
  }
};
