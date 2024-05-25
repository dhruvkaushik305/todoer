import { UserType } from "@repo/types/User";
import db from "@repo/db/prisma";
import { Response, Request, NextFunction } from "express";
interface userRequest extends Request {
  user?: UserType;
}
export const cheerPost = async (
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
    await db.cheer.update({
      where: {
        postId: id,
      },
      data: {
        count: {
          increment: 1,
        },
      },
    });
    return res.status(200).json({ success: true, message: "Cheered post" });
  } catch (err) {
    next(err);
  }
};
export const unCheerPost = async (
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
    await db.cheer.update({
      where: {
        postId: id,
      },
      data: {
        count: {
          decrement: 1,
        },
      },
    });
    return res.status(200).json({ success: true, message: "UnCheered post" });
  } catch (err) {
    next(err);
  }
};
