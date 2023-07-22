import { NextFunction, Request, Response } from "express";
import { MessagesList } from "../models/messagesList.model.js";


export const createMessage = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const newMessagesList = new MessagesList({
    conversationId: req.isEmployee ? req.userId + req.body.to : req.body.to + req.userId,
    employeeId: req.isEmployee ? req.userId : req.body.to,
    recruitorId: req.isEmployee ? req.body.to : req.userId,
    readByEmployee: req.isEmployee,
    readByRecruitor: !req.isEmployee,
    lastMessage:req.body.lastMessage
  });


  try {
    const savedMessage = await newMessagesList.save();
    res.status(200).send(savedMessage);

  } catch (error) {
    next(error)
  }
};

export const updatedMessage = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedMessage = await MessagesList.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: {
          readByEmployee: true,
          readByRecruitor: true,
        },
      },
      { new: true }
    );
    res.status(200).send(updatedMessage);
  } catch (error) {
    next(error)
  }
};

export const getSingleMessage = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const singleMessage = await MessagesList.findOne({ id: req.params.id });
    res.status(200).send(singleMessage);
  } catch (error) {
    next (error)
  }
};

export const getMessagesList = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const allMessagesList = await MessagesList.find(
      req.isEmployee ? { employeeId: req.userId } : { recruitorId: req.userId }
    );
    res.status(200).send(allMessagesList)
  } catch (error) {
    next(error)
  }
};
