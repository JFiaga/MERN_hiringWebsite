import { Router } from "express";
import verifyToken from "../middleware/jwt.ts";
import { createExperience, deleteExperience } from "../controllers/experiences.controller.ts";

const router = Router()




export default router