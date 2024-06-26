import { SignupSchema, LoginSchema } from "@repo/types/Auth";
import { NextFunction, Request, Response } from "express";
import { UserType } from "@repo/types/User";
import db from "../../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface UserRequest extends Request {
  user?: UserType;
}

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
  try {
    const user = await db.user.create({
      data: {
        name,
        email,
        password,
        username,
      },
    });
    return res.status(201).json({ success: true, message: "User created" });
  } catch (err) {
    next(err);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  const verify = LoginSchema.safeParse(req.body);
  if (!verify.success) {
    return res.status(400).json({ success: false, error: verify.error.issues });
  }
  try {
    const user = await db.user.findFirst({
      where: {
        email: verify.data.email,
      },
    });
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    const match = await bcrypt.compare(verify.data.password, user.password);
    if (!match) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid password" });
    }
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET not found. Did you set up the ENV?");
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.cookie("authorization", `Bearer ${token}`, {
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production",
    });
    return res.status(200).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
}

export const userIsLogged = (req: UserRequest, res: Response) => {
  return res.status(200).json({ success: true, data: req.user });
};

export const logout = (req: Request, res: Response) => {
  if (req.cookies.authorization) {
    res.clearCookie("authorization");
    res.status(200).json({ success: true, message: "Cookie removed" });
  } else {
    return res.status(401).json({ success: false, error: "No cookie present" });
  }
};
