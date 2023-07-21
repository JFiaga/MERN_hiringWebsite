import { Document } from "mongoose";

export interface IMessageBoard extends Document {
  conversationId: string;
  userId: string;
  desc: string;
}
