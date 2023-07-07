import { Schema, model } from "mongoose";
import { IProfile } from "../interfaces/profile.interfaces";

const ProfileSchema = new Schema<IProfile>({
  userId: {
    type: String,
    required: true,
    // unique:true
  },
  isCertified: {
    type: Boolean,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  networkLink: {
    type: [],
    required: false,
  },
  // rate: number,
  about: {
    type: String,
    required: true,
  },
  experiences: {
    required: true,
  },
  hardSkills: {
    // type: [],
    required: true,
  },
  softSkills: {
    // type: [],
    required: true,
  },
  languages: {
    // type: [],
    required: true,
  },
  education: {
    // type: [],
    required: true,
  },
  certification: {
    // type: [],
    required: true,
  },
},
{
  timestamps: true,
}
);



export const  Profile= model<IProfile>("Profile", ProfileSchema);
