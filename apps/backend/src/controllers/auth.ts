import bcrypt from "bcrypt";
import { SignupSchema } from "@repo/types/Signup";
import db from "@repo/db/prisma";
import { NextFunction, Request, Response } from "express";
export async function checkUsername(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { username } = req.params;
  try {
    const user = await db.user.findFirst({
      where: {
        username,
      },
    });
    if (user) {
      return res.status(200).json({ success: true, exists: true });
    }
    return res.status(200).json({ success: false, exists: false });
  } catch (err) {
    next(err);
  }
}
export async function signup(req: Request, res: Response, next: NextFunction) {
  const verify = SignupSchema.safeParse(req.body);
  if (!verify.success) {
    return res.status(400).json({ error: verify.error.issues });
  }
  let { name, email, password, username } = verify.data;
  password = await bcrypt.hash(password, 10);
  // Save user to database
  try {
    const user = await db.user.create({
      data: {
        name,
        email,
        password,
        username,
      },
    });
    return res.status(201).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
}
