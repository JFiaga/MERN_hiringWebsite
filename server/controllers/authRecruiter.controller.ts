import  jwt  from 'jsonwebtoken';
import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { BaseError, notFoundError } from "../utils/error.ts";
import { Recruiter } from "../models/recruiter.model.ts";

export interface TypedRequestBody<T> extends Express.Request { 
  body: T;
}
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
      res.status(201).send("Recruiter has been created");
    } else {
      return res.status(403).send("Email already exist, enter a valid email");
    }
  } catch (error) {
    next(new BaseError("Something went wrong", 500, true));
  }
};

// export const login = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const recruiter = await Recruiter.findOne({ email: req.body.email });
//     if (!recruiter) return next(new notFoundError("recruiter not found"));

//     const isCorrect = bcrypt.compareSync(req.body.password, recruiter.password);

//     if (!isCorrect) {
//       return next(new BaseError("Wrong email or password", 400, true));

//     }

//     const secret = "process.env.JWT_SECRET";

//     const token = jwt.sign(
//       {
//         id: recruiter._id,
//         isEmployee: recruiter.isEmployee,

//         //we will use the isEmployee to verify some part of application like experiences
//       },
//       secret
//     );

//     const { password, ...other } = recruiter._doc;
//     res
//       .cookie("accessToken", token, {
//         httpOnly: true,
//       })
//       .status(200)
//       .send(other).redirect('/');
//   } catch (error) {
//     next(new BaseError("Internal server error", 500, true));
//   }
// };

export const logout = async (req: Request, res: Response) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none", //because url of server and client are not the same
      secure: true,
    })
    .status(200)
    .send("User has been logged out");
};
