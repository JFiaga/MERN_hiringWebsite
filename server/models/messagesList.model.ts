import { Schema, model } from "mongoose";
import {  IMessagesList } from "../interfaces/messagesList.interface";

const MessagesListSchema = new Schema<IMessagesList>(
  {
    conversationId: {
      type: String,
      // required: true,
      unique: true,
    },

    recruitorId: {
      type: String,
      // required: true,
    },
    employeeId: {
      type: String,
      // required: true,
    },
    readByRecruitor: {
      type: Boolean,
      // required: true,
    },
    readByEmployee: {
      type: Boolean,
      // required: true,
    },
    lastMessage: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


export const MessagesList = model<IMessagesList>("MessagesList", MessagesListSchema)