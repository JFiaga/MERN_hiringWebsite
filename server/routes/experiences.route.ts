import { Router } from "express";
import verifyToken from "../middleware/jwt.ts";
import { createExperience, deleteExperience, getExperiences } from "../controllers/experiences.controller.ts";


const router = Router()

router.get('/:id',  getExperiences )
router.post('/createNewExperience', verifyToken, createExperience ) 
router.delete('/:id', verifyToken, deleteExperience)


export default router  