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
  const { task }: { task: string } = req.body;
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
  try {
    const todos = await db.todo.findMany({
      where: {
        userId: req.user?.id,
      },
      select: {
        id: true,
        order: true,
        task: true,
        completed: true,
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
  const { order1, order2 } = req.body;
  //swap the order of the two todos
  try {
    const todo1 = await db.todo.findUnique({
      where: {
        order: order1,
        userId: req.user!.id,
      },
    });
    const todo2 = await db.todo.findUnique({
      where: {
        order: order2,
        userId: req.user!.id,
      },
    });
    if (!todo1 || !todo2) {
      return res.status(400).json({
        success: false,
        message: "Todos with the given order not found",
      });
    }
    let updatedTodo1 = await db.todo.update({
      where: {
        id: todo1.id,
      },
      data: {
        order: 1,
      },
    });
    let updatedTodo2 = await db.todo.update({
      where: {
        id: todo2.id,
      },
      data: {
        order: order1,
      },
    });
    updatedTodo1 = await db.todo.update({
      where: {
        id: todo1.id,
      },
      data: {
        order: order2,
      },
    });
    return res
      .status(200)
      .json({ success: true, data: [updatedTodo1, updatedTodo2] });
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
