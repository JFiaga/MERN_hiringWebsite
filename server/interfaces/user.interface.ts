import { Document, ObjectId } from "mongoose";

export interface IUser extends Document {
  _doc:any,
    _id:ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    img: string;
    desc: string;
    city: string;
    specialisation:string,
    phone: number;
    isEmployee: boolean;
  }