import express from 'express'
import { deleteUser, getAllRecruiter, getAllUser, getUserBySpecialisation} from '../controllers/user.controller.ts'
import { verifyToken } from './../middleware/jwt.ts';


const router = express.Router()




router.delete('/:id', verifyToken, deleteUser)
router.get('/', getAllUser)
router.get('/recruiter', getAllRecruiter)
router.get('/:id', getUserBySpecialisation)


  
export default router