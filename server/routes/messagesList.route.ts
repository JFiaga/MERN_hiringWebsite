import { Router } from "express";
import verifyToken from "../middleware/jwt.js";
import { createMessage, getMessagesList, getSingleMessage, updatedMessage } from "../controllers/messagesList.controller.js";

const router = Router()

router.post('/',verifyToken, createMessage ) 
router.put('/:id',verifyToken, updatedMessage )
router.get('/',verifyToken, getMessagesList )
router.get('/single/:id',verifyToken, getSingleMessage )


export default router