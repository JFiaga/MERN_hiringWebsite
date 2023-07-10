import jwt  from 'jsonwebtoken';
import { Request, Response } from "express"

export const verifyToken = (req:Request, res:Response) => {
    const token =  req.cookies.accessToken
    if(!token) return res.status(401).send("You are not authenticated")

    jwt.verify(token, "process.env.JWT_SECRET", async (err:any, payload:any) => {
        if(err) return res.status(403).send("Token is not valid")
        req.body.userId = payload.id;
        req.body.isEmployee = payload.isEmployee
    })
}


export default verifyToken