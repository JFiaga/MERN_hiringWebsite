import { Document, ObjectId } from "mongoose";

export interface IUser extends Document {
  _doc:any,
    _id:ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    img: string;
    cv:string;
    desc: string;
    city: string;
    github: string;
    linkedin: string;
    twitter: string;
    specialisation:string,
    isEmployee: boolean;
  }

