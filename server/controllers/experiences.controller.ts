import { NextFunction, Request, Response } from "express";
import { BaseError } from "../utils/error.ts";
import { Experiences } from "../models/experiences.model.ts";

export const deleteExperience = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const experience = await Experiences.findById(req.params.id);

    if (experience?.userId !== req.userId) {
      // return res.status(403).send('h')
      return next(
        new BaseError("You are not authorizhed to do that operation", 403, true)
      );
    } else {
      await Experiences.findByIdAndDelete(req.params.id);
      res.status(200).send("Gig has deleted");
    }
  } catch (err) {
    next(err);
  }
};

export const createExperience = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  // req.isEmployee
  if (!req.isEmployee)
    return next(
      new BaseError(
        "Only developper profile can create an experience card",
        403,
        true
      )
    );

  const newExperience = new Experiences({
    //the userId of req.userId comming from jwt
    userId: req.userId,
    ...req.body,
  });
  // req.userId ===  User._id

  try {
    const savedExperience = await newExperience.save();
    res.status(201).json(savedExperience);
  } catch (err) {
    next(err);
  }
};

export const getExperiences = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const experience = await Experiences.find({ userId: req.params.id });
    if (!experience) {
      return res.status(200).send("This user has no experiences found");
    } else {
      res.status(200).send(experience);
    }
  } catch (err) {
    next(err);
  }
};

//Change the any type of req