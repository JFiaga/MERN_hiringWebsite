import { NextFunction, Response } from "express";
import { MessageDiscussion } from "../models/messageDiscussion.model.ts";
import { MessagesList } from "../models/messagesList.model.ts";

export const createMessageDiscussion = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const newMessage = new MessageDiscussion({
    messageDiscussionId: req.body.messageDiscussionId,
    userId: req.userId,
    desc: req.body.desc,
  });
  try {
    const savedMessage = await newMessage.save();
    await MessagesList.findOneAndUpdate(
      { conversationId: req.body.messageDiscussionId },
      {
        $set: {
          readByEmployee: req.isEmployee,
          readByRecruitor: !req.isEmployee,
          lastMessage: req.body.desc,
        },
      },
      { new: true }
    );
    res.status(200).send(savedMessage);
  } catch (error) {
    next(error);
  }
};
export const getMessageDiscussion = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const messages = await MessageDiscussion.find({
      messageDiscussionId: req.params.id,
    });
    res.status(200).send(messages);
  } catch (error) {
    next(error);
  }
};
