import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model.ts";
import { BaseError } from "../utils/error.ts";

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await User.findById(req.params.id);

  if (req.body.userId !== user?._id) {
    next(new BaseError("You can only delete your account", 403, true));
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("deleted");
};
