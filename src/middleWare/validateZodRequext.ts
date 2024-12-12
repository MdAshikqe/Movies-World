import { NextFunction, Request, Response } from "express"
import { AnyZodObject } from "zod"

const validateZodRequest= (schema:AnyZodObject)=>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        try {
           const parseBody= await schema.parseAsync({body:req.body})
           req.body=parseBody.body;

            next();
        } catch (error) {
            next(error)
        }

    }
}


export default validateZodRequest;