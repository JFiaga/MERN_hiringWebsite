import jwt, { Secret }  from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express"
import { BaseError } from '../utils/error.ts';

export const verifyToken = (req:any, res:any, next:NextFunction) => {
    const token =  req.cookies.accessToken
    if(!token) return next(new BaseError('You are not authenticated', 401, true))

    jwt.verify(token, process.env["JWT_SECRET"] as Secret, async (err:any, payload:any) => {
        if(err) return next(new BaseError ("Token is not valid", 403, true))
        req.userId = payload.id;
        req.isEmployee = payload.isEmployee
        next()
    })
}


export default verifyToken