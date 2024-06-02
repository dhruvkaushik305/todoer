import { UserType } from "../../../../packages/types/userTypes";
import { Request, Response, NextFunction } from "express";
import db from "../../db";

interface userRequest extends Request {
  user?: UserType;
}

export const create = async (
  req: userRequest,
  res: Response,
  next: NextFunction
) => {
  const { task, order }: { task: string; order: number } = req.body;
  if (!task || order === undefined) {
    return res
      .status(400)
      .json({ success: false, message: "Incomplete request" });
  }
  try {
    //find if the user already has a post
    const post = await db.post.findUnique({
      where: {
        userId: req.user!.id,
      },
    });
    if (post) {
      //update the post and return the updated post
      const response = await db.post.update({
        where: {
          id: post.id,
        },
        data: {
          todos: {
            create: {
              task,
              order,
            },
          },
        },
        select: {
          todos: true,
        },
      });

      return res.status(201).json({ success: true, data: response.todos });
    }
    //create a new post
    const response = await db.post.create({
      data: {
        userId: req.user!.id,
        todos: {
          create: {
            task,
            order,
          },
        },
      },
      select: {
        todos: true,
      },
    });

    return res.status(201).json({ success: true, data: response.todos });
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
    const post = await db.post.findUnique({
      where: {
        userId: id,
      },
      select: {
        todos: {
          orderBy: {
            order: "asc",
          },
        },
      },
    });
    return res.status(200).json({ success: true, data: post?.todos || [] });
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
    return res.status(200).json({ success: true, message: "Todo deleted" });
  } catch (err) {
    next(err);
  }
};
