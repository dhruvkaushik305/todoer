import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";
const GlobalError = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Gracefully caught", err.message);
  return res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};
export default GlobalError;
