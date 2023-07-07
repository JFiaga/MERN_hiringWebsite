import { Document } from "mongoose";

export interface IMessage extends Document {
  conversationId: string;
  recruitorId: string;
  employeeId: string;
  readByRecruitor: boolean;
  readByEmployee: boolean;
  lastMessage: string;
}
