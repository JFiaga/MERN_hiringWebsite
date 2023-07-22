import { Router } from 'express';
import { register } from '../controllers/authRecruiter.controller.ts';

const router =  Router()

router.post("/registerRecruiter", register)
// router.post("/loginRecruiter", login)
// router.post("/logoutRecruiter", logout)


export default router 