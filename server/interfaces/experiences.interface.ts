import { Document } from "mongoose";

export interface IExperiences extends Document {
  userId: string;
  projectLink: string;
  projectName: string;
  role: string;
  technologiesUsed: string;
  desc: string;
}
