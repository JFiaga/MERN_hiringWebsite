import { Schema, model } from "mongoose";
import { IRecruiter } from "../interfaces/recruiter.interface";

const RecruiterSchema = new Schema<IRecruiter>({
  firstName: {
    trype: String,
    required: true,
  },
  lastName: {
    trype: String,
    required: true,
  },
  email: {
    trype: String,
    required: true,
  },
  password: {
    trype: String,
    required: true,
  },
  city: {
    trype: String,
    required: true,
  },
  isEmployee: {
    trype: Boolean,
    default: false,
  },
});

export const Recruiter = model<IRecruiter>("Recruiter", RecruiterSchema);
