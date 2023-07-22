import { Document } from "mongoose";

export interface IMessagesList extends Document {
  conversationId: string;
  recruitorId: string;
  employeeId: string;
  readByRecruitor: boolean;
  readByEmployee: boolean;
  lastMessage: string;
}
