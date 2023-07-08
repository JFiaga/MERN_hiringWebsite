import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { User } from "../models/user.model.ts";

export const deleteUser = async (req: Request, res: Response) => {
  
const user = User.findById(req.params.id);

  const token = req.cookies.accessToken;

  if (!token) return res.status(401).send("you are not authenticated");

  const secret = "process.env.JWT_SECRET";

  //verify the if the current user try to delete their account

  jwt.verify(token, "process.env.JWT_SECRET", (err, payload):VerifyOptions => {
    if (payload.id !== user._id) {
      res.status(403).send("you can delete only your account");
    }
  });
 
  await User.findByIdAndDelete(req.params.id);

  res.status(200).send("deleted");
};
