import { UserType } from "@repo/types/User";
import { Request, Response, NextFunction } from "express";
import db from "@repo/db/prisma";
interface userRequest extends Request {
  user: UserType;
}
export const create = (
  req: userRequest,
  res: Response,
  next: NextFunction
) => {};
export const read = async (
  req: userRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos = await db.todo.findMany({
      where: {
        userId: req.user.id,
      },
      select: {
        id: true,
        order: true,
        task: true,
        completed: true,
      },
    });
    res.status(200).json({ success: true, data: todos });
  } catch (err) {
    next(err);
  }
};
export const update = (
  req: userRequest,
  res: Response,
  next: NextFunction
) => {};
export const remove = (
  req: userRequest,
  res: Response,
  next: NextFunction
) => {};
