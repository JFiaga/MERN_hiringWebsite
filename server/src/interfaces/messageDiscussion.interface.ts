import { Document } from "mongoose";

export interface IMessageDiscussion extends Document {
  messageDiscussionId: string;
  userId: string;
  desc: string;
}
