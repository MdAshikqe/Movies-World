import {Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { AuthServices } from "./auth.service";

const register=catchAsync(async(req:Request,res:Response)=>{
    const result= await AuthServices.register(req.body)
    
    res.status(200).json({
        sucess:true,
        message:"User register successfully",
        data:result
    })

})

const login= catchAsync(async(req:Request,res:Response)=>{
    const {accessToken,refressToken}= await AuthServices.login(req.body)
    res.cookie("refressToken",refressToken,{
        httpOnly:true,
        secure: process.env.NODE_ENV === "production"
    })

    res.status(200).json({
        success:true,
        message:"User login successfully",
        data:{
            accessToken
        }
    })
})

export const AuthController= {
    register,
    login
}