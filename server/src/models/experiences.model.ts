import { Schema, model } from "mongoose";
import { IExperiences } from "../interfaces/experiences.interface.ts";

const ExperiencesSchema = new Schema<IExperiences>(
  {
    userId: {
      type: String,
      // required: true,

    },
    projectLink: {
        type: String,
        // required: true,

      },
    projectName: {
      type: String,
      // required: true,
    },
    role: {
      type: String,
      // required: true,
    },
    technologiesUsed: {  
      type:String,
      // required: true,
    },  
    projectDesc: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const  Experiences= model<IExperiences>("Experiences", ExperiencesSchema);
