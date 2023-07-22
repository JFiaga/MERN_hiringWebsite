import { Schema, model } from "mongoose";
import { IRecruiter } from "../interfaces/recruiter.interface";

const RecruiterSchema = new Schema<IRecruiter>({
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
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required:true
  },
  isEmployee: {
    type: Boolean,
    default: false,
  },
});

export const Recruiter = model<IRecruiter>("Recruiter", RecruiterSchema);
