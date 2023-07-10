import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { BaseError, ValidationError } from "../utils/error";

const errorHandler = (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ValidationError) {
    return res.status(err.status).json({
      status: "fail",
      message: err.message,
      data: err.errorData,
    });
  } else if (err instanceof BaseError) {
    if (err.isOperational) {
      return res.status(err.status).json({
        status: err.status < 500 && err.status >= 400 ? "fail" : "error",
        message: err.message,
      });
    } else {
      console.log(err);
      return res.status(err.status).json({
        status: "error",
        message: "something went wrong",
      });
    }
  }
};

export {errorHandler}
