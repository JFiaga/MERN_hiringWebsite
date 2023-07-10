import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { User } from "../models/user.model.ts";

export const deleteUser = async (req: Request, res: Response) => {
  // const user = await User.findOne({ _id: req.params._id });
  const user = await User.findById(req.params.id);

  if (req.body.userId !== user?._id) {
    res.status(403).send("you can delete only your account");
  } 
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted");
  }
 

// fix that any type later
// fix bug of deleting user
 