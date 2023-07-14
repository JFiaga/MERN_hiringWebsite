import { Router } from "express";
import verifyToken from "../middleware/jwt.ts";
import { getUserDataForProfile } from "../controllers/user.controller.ts";

const router = Router()


router.get('/:id', getUserDataForProfile)

export default router