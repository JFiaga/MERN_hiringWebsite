import { Schema, model } from "mongoose";
import { IMessage } from "../interfaces/message.interface";

const MessageSchema = new Schema<IMessage>(
  {
    conversationId: {
      type: String,
      required: true,
      unique: true,
    },
    // userId
    recruitorId: {
      type: String,
      required: true,
    },
    employeeId: {
      type: String,
      required: true,
    },
    readByRecruitor: {
      type: Boolean,
      required: true,
    },
    readByEmployee: {
      type: Boolean,
      required: true,
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


export const Message = model<IMessage>("Message", MessageSchema)