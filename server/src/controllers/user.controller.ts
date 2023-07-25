import { NextFunction, Request, Response, request } from "express";
import { User } from "../models/user.model.ts";
import { BaseError } from "../utils/error.ts";
import { Recruiter } from "../models/recruiter.model.ts";

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


export const getUserDataForProfile = async (req:Request, res:Response, next:NextFunction) => {
  try {
        const user = await User.findById(req.params.id)
        if (!user) res.status(404).send('no user found')

        else{
          res.status(200).send(user)
        }
  } catch (error) {
    next (error)
  }
}
export const getAllUser = async (req:Request, res:Response, next:NextFunction) => {
  try {
        const user = await User.find()
        if (!user) res.status(404).send('no user found')

        else{
          res.status(200).send(user)
        }
        
  } catch (error) {
    next (error)
  }
}
export const getUserBySpecialisation = async (req:Request, res:Response, next:NextFunction) => {
  try {
        const user = await User.find({specialisation:req.params.id})
        if (!user) res.status(404).send('no user found')
        else{
          res.status(200).send(user)
        }
        
  } catch (error) {
    next (error)
  }
}

export const getAllRecruiter = async (req:Request, res:Response, next:NextFunction) => {
  try {
        const user = await Recruiter.find()
        if (!user) res.status(404).send('no user found')

        else{
          res.status(200).send(user)
        }
        
  } catch (error) {
    next (error)
  }
}
