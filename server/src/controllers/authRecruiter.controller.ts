import  jwt  from 'jsonwebtoken';
import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { BaseError, notFoundError } from "../utils/error.ts";
import { Recruiter } from "../models/recruiter.model.ts";


export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const isEmailExist = await Recruiter.findOne({ email: req.body.email });
    if (!isEmailExist) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const newRecruiter = new Recruiter({
        ...req.body,
        password: hash,
      });
      await newRecruiter.save();
      res.status(200).send("Recruiter has been created");
    } else {
      return res.status(403).send("Email already exist, enter a valid email");
    }
  } catch (error) {
    next(new BaseError("Something went wrong", 500, true));
  }
};
  


export const logout = async (req: Request, res: Response) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none", //because url of server and client are not the same
      secure: true,
    })
    .status(200)
    .send("User has been logged out");
};
