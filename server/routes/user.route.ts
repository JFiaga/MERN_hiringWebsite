import express from 'express'
import { deleteUser } from '../controllers/user.controller.ts'

const router = express.Router()


router.delete('/:id',deleteUser)


export default router