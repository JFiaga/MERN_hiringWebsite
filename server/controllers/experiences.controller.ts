import { NextFunction, Request, Response} from 'express';
import { BaseError } from '../utils/error.ts';
import { Experiences } from '../models/experiences.model.ts';



export const deleteExperience = (req:Request, res:Response, next:NextFunction) => {
        // res.send('pas mal ma poule')
}




export  const createExperience = async(req:Request, res:Response, next:NextFunction) => {
    // req.isEmployee
        if(!req.isEmployee) return next(new BaseError("Only developper profile can create an experience card", 403, true));

        const newExperience =  new Experiences({
            //userId comming from jwt
            //req.userId
            userId:req.userId,
            ...req.body
        })

        try {
            const savedExperience = await newExperience.save()
            res.status(201).json(savedExperience)
        } catch (err) {
            next(err)
        }
}

