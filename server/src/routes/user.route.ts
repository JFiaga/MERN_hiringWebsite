import express from 'express'
import { deleteUser } from '../controllers/user.controller.ts'
import { verifyToken } from './../middleware/jwt.ts';


const router = express.Router()




router.delete('/:id', verifyToken, deleteUser)


export default router