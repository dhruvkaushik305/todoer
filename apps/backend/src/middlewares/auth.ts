import { Request, Response, NextFunction } from "express";
import { UserType } from "@repo/types/User";
import db from "@repo/db/prisma";
import jwt from "jsonwebtoken";
interface userRequest extends Request {
  user?: UserType;
}
interface decodedToken extends jwt.JwtPayload {
  id: string;
}
const authenticateUser = async (
  req: userRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.cookies.authorization) {
      return res
        .status(401)
        .json({ success: false, error: "Unauthorized, No access token found" });
    }
    const token = req.cookies.authorization.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ success: false, error: "Unauthorized, No access token found" });
    }
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET not found. Did you set up the ENV?");
    }
    const { id } = jwt.verify(token, process.env.JWT_SECRET) as decodedToken;
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, error: "Unauthorized, user not found" });
    }
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};
export default authenticateUser;
