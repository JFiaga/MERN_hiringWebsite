import { Schema, model } from "mongoose";
import { IMessageBoard } from "../interfaces/messageBoard.interface";

const messageBoardSchema = new Schema<IMessageBoard>({
  conversationId: {
    type: String,
  },
  userId: {
    type: String,
  },
  desc: {
    type: String,
  },
});

export const MessageBoard = model<IMessageBoard>(
  "MessageBoard",
  messageBoardSchema
);
