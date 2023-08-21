import { Document, ObjectId } from "mongoose";

export interface ISoftSkills extends Document {

    skills:string[]
}