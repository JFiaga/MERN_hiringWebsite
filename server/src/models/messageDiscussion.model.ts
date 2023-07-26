import { Schema, model } from "mongoose";
import { IMessageDiscussion } from "../interfaces/messageDiscussion.interface.ts";

const messageDiscussionSchema = new Schema<IMessageDiscussion>({
  messageDiscussionId: {
    type: String,
  },
  userId: {
    type: String,
  },
  desc: {
    type: String,
  },
}, {
  timestamps:true
});

export const MessageDiscussion = model<IMessageDiscussion>(
  "MessageDiscussion",
  messageDiscussionSchema
);
