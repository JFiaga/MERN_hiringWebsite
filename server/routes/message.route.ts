import { Router } from "express";
import verifyToken from "../middleware/jwt.ts";
import { createMessage, getMessages, getSingleMessage, updatedMessage } from "../controllers/message.controller.ts";

const router = Router()

router.post('/',verifyToken, createMessage ) 
router.put('/:id',verifyToken, updatedMessage )
router.get('/',verifyToken, getMessages )
router.get('/single:id',verifyToken, getSingleMessage )


export default router