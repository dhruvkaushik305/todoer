import { UserType } from "@repo/types/User";
import { Request, Response, NextFunction } from "express";
import db from "@repo/db/prisma";
interface userRequest extends Request {
  user?: UserType;
}
export const create = async (
  req: userRequest,
  res: Response,
  next: NextFunction
) => {
  const { task, order }: { task: string; order: number } = req.body;
  if (!task) {
    return res
      .status(400)
      .json({ success: false, message: "Incomplete request" });
  }
  try {
    const response = await db.todo.create({
      data: {
        task,
        userId: req.user!.id,
        order,
      },
    });
    return res.status(201).json({ success: true, data: response });
  } catch (err) {
    next(err);
  }
};
export const read = async (
  req: userRequest,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const todos = await db.todo.findMany({
      where: {
        userId: id,
      },
      select: {
        id: true,
        order: true,
        task: true,
        completed: true,
      },
      orderBy: {
        order: "asc",
      },
    });
    return res.status(200).json({ success: true, data: todos });
  } catch (err) {
    next(err);
  }
};
export const updateOrder = async (
  req: userRequest,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { order } = req.body;
  if (!id || order === undefined) {
    return res
      .status(400)
      .json({ success: false, message: "Incomplete request" });
  }
  try {
    const todo = await db.todo.update({
      where: {
        id,
      },
      data: {
        order,
      },
    });
    return res.status(200).json({ sucess: true, data: todo });
  } catch (err) {
    next(err);
  }
};
export const updateStatus = async (
  req: userRequest,
  res: Response,
  next: NextFunction
) => {
  const { id, state } = req.body;
  if (!id || state === undefined)
    return res
      .status(400)
      .json({ success: false, message: "Incomplete request" });
  try {
    const todo = await db.todo.update({
      where: {
        id,
      },
      data: {
        completed: state,
      },
    });
    return res.status(200).json({ success: true, data: todo });
  } catch (err) {
    next(err);
  }
};
export const updateTodo = async (
  req: userRequest,
  res: Response,
  next: NextFunction
) => {
  const { id, task } = req.body;
  if (!id || !task)
    return res
      .status(400)
      .json({ success: false, message: "Incomplete request" });
  try {
    const todo = await db.todo.update({
      where: {
        id,
      },
      data: {
        task,
      },
    });
    return res.status(200).json({ success: true, data: todo });
  } catch (err) {
    next(err);
  }
};
export const remove = async (
  req: userRequest,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const response = await db.todo.delete({
      where: {
        id: id,
      },
    });
    return res.status(200).json({ success: true, data: response });
  } catch (err) {
    next(err);
  }
};
