/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express"


export const catchAsync= (fn: any)=>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        // try {
        //     await fn(req,res,next)
        // } catch (error) {
        //     res.status(500).json({
        //         success:false,
        //         message:"Something went wrong!",
        //         error:error,
        //     })
        // }

        return Promise.resolve(fn(req,res,next)).catch(error=>{
            // res.status(500).json({
            //             success:false,
            //             message:"Something went wrong!",
            //             error:error,
            //         })
            next(error)
        })

    }

}