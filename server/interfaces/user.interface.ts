import { Document, ObjectId } from "mongoose";

export interface IUser extends Document {
  _doc:any,
    _id:ObjectId;
    username: string;
    email: string;
    password: string;
    img: string;
    desc: string;
    country: string;
    phone: number;
    isEmployee: boolean;
  }