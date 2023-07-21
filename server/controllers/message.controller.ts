import { NextFunction, Request, Response } from "express";
import { Message } from "../models/message.model.ts";
import { Query } from "express-serve-static-core";

export const createMessage = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const newMessage = new Message({
    conversationId: req.isEmployee ? req.userId + req.body.to : req.body.to + req.userId,
    employeeId: req.isEmployee ? req.userId : req.body.to,
    recruitorId: req.isEmployee ? req.body.to : req.userId,
    readByEmployee: req.isEmployee,
    readByRecruitor: !req.isEmployee,
  });
  

  try {
    const savedMessage = await newMessage.save();
    res.status(200).send(savedMessage);
  } catch (error) {}
};

export const updatedMessage = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedMessage = await Message.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: {
          readByEmployee: req.isEmployee,
          readByRecruitor: !req.isEmployee,
        },
      },
      { new: true }
    );
    res.status(200).send(updatedMessage);
  } catch (error) {}
};

export const getSingleMessage = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const singleMessage = await Message.findOne({ id: req.params.id });
    res.status(200).send(singleMessage);
  } catch (error) {}
};

export const getMessages = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const allMessages = await Message.find(
      req.isEmployee ? { employeeId: req.userId } : { recruitorId: req.userId }
    );
    res.status(200).send(allMessages)
  } catch (error) {}
};
