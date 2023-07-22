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
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    cv: {
      type: String,
      // required: true,
    },
    city: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    specialisation: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      // required: true,
    },
    linkedin: {
      type: String,
      // required: true,
    },
    twitter: {
      type: String,
      required: false,
    },
    isEmployee: {
      type: Boolean,
      default: true,
    },
    isCertified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
export const User = model<IUser>("User", userSchema);
