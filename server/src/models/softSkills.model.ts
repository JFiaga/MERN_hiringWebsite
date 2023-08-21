import { ISoftSkills } from './../interfaces/softSkills.interface';
import { Schema, model } from "mongoose";


const SoftSkillsSchema = new Schema<ISoftSkills>({
    skills:{
        type:[String]
    }
})