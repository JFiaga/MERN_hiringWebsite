import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema<IUser>(
  {
    _id: {
      type:Schema.Types.ObjectId
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // img: {
    //   type: String,
    //   required: true,
    // },
    // phone: {
    //   type: Number,
    //   required: false,
    // },
    // country: {
    //   type: String,
    //   required: true,
    // },
    // desc: {
    //   type: String,
    //   required: true,
    // },
    isEmployee: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
export const User = model<IUser>("User", userSchema);
