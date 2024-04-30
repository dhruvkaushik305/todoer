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
      },
      select: {
        id: true,
        username: true,
        name: true,
      },
    });
    console.log("The query was", query.toString());
    // console.log(users, "found for", query.toString());
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
export const getUser = async (
  req: userRequest,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    return res
      .status(400)
      .json({ success: false, message: "Incomplete request" });
  }
  try {
    const user = await db.user.findUnique({
      where: { id },
      select: {
        id: true,
        todos: true,
      },
    });
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "No users found with the given id" });
    return res.status(200).json({ success: true, todos: user.todos });
  } catch (err) {
    next(err);
  }
};
