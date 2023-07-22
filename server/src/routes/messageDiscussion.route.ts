;
import { Router } from "express";
import {verifyToken} from "../middleware/jwt.ts";
import {createMessageDiscussion, getMessageDiscussion} from '../controllers/messageDiscussion.controller.ts'

const router = Router()

router.post("/", verifyToken, createMessageDiscussion)
router.get("/:id", verifyToken, getMessageDiscussion)


export default router