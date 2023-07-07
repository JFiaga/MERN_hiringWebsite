import { Document } from "mongoose";

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    img: string;
    desc: string;
    country: string;
    phone: number;
    isEmployee: boolean;
  }