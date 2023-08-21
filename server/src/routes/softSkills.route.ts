import { Router } from "express";
import { createSoftSkills, deleteSoftSkills, getSoftSkills } from "../controllers/softSkills.controller";
import verifyToken from "../middleware/jwt";



const router = Router()

router.get('/', getSoftSkills)
router.delete('/', verifyToken, deleteSoftSkills)
router.post('/', verifyToken, createSoftSkills)