import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { notFoundError, BaseError } from "../utils/error.ts";
import { Recruiter } from "../models/recruiter.model.ts";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const isEmailExist = await User.findOne({ email: req.body.email });

    if (!isEmailExist) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({
        ...req.body,
        password: hash,
      });
      await newUser.save();
      res.status(201).send("User has been created");
    } else {
      return res.status(403).send("Email already exist, enter a valid email");
    }
  } catch (err) {
    next(new BaseError("something went wrong", 500, true));
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const recruiter = await Recruiter.findOne({ email: req.body.email });

    if (!user && !recruiter) {
      return next(new notFoundError("user not found"));
    } else if (!user) {
      const isCorrect = bcrypt.compareSync(
        req.body.password,
        recruiter!.password
      );

      if (!isCorrect) {
        return next(new BaseError("Wrong email or password", 400, true));
      }

      const token = jwt.sign(
        {
          id: recruiter!._id,
          isEmployee: recruiter!.isEmployee,

          //we will use the isEmployee to verify some part of application like experiences
        },
        process.env.JWT_SECRET 
      );

      const { password, ...other } = recruiter!._doc;
      res
        .cookie("accessToken", token, {
          httpOnly: true,
        })
        .status(200)
        .send(other);
    } else if (user) {
      const isCorrect = bcrypt.compareSync(req.body.password, user.password);

      if (!isCorrect) {
        return next(new BaseError("Wrong email or password", 400, true));
      }

      const token = jwt.sign(
        {
          id: user._id,
          isEmployee: user.isEmployee,

          //we will use the isEmployee to verify some part of application like experiences
        },
        process.env.JWT_SECRET 

      );
      const { password, ...other } = user._doc;
      res
        .cookie("accessToken", token, {
          httpOnly: true,
        })
        .status(200)
        .send(other)
        .redirect("/");
    }
  } catch (error) {
    next(new BaseError("Internal server error", 500, true));
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
