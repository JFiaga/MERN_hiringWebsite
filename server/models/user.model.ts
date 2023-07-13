import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema<IUser>(
  {
    // _doc:{

    // },
    // id: {
    //   type:Schema.Types.ObjectId

    // },
    
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique:true,
      required:true,
      
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    // phone: {
    //   type: Number,
    //   required: false,
    // },
    city: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    specialisation:{
      type:String,
      required:true
    },
    isEmployee: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
export const User = model<IUser>("User", userSchema);
