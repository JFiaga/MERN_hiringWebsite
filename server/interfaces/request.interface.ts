import { Request } from "express"

export interface IRequestCustom extends Request {
    userId:string
    isEmployee:boolean
}