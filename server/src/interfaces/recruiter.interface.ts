import { Document, ObjectId } from "mongoose";

export interface IRecruiter extends Document {
  _doc:any,
    _id:ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    companyName:string;
    city: string;
    isEmployee: boolean;
  }