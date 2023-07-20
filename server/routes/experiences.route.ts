import { Router } from "express";
import verifyToken from "../middleware/jwt.ts";
import { createExperience, deleteExperience, deleteOneExperience, getExperiences } from "../controllers/experiences.controller.ts";



const router = Router()

router.get('/:id',  getExperiences )
router.delete('/unique/:id', verifyToken, deleteOneExperience )
router.post('/createNewExperience', verifyToken, createExperience ) 
// router.delete('/:id', verifyToken, deleteExperience)


export default router  