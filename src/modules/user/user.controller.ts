import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { UserService } from "./user.service";

const createAdmin= catchAsync(async(req:Request,res:Response)=>{
    const userData=req.body;
    const result= await UserService.createAdmin(userData)

    res.status(200).json({
        success:true,
        message:"Admin create successfuly",
        data:result
    })

})

const updateAdminAndSuperAdmin= catchAsync(async(req:Request,res:Response)=>{
    const userData= req.body;
    const {userId}= req.params;
    const result= await UserService.updateAdminAndSuperAdmin(userId,userData)

    res.status(200).json({
        success:true,
        message:"User Update successfuly",
        data:result
    })

})

const updateUser=catchAsync(async(req:Request,res:Response)=>{
    const result= await UserService.updateUser(req.body)

    res.status(200).json({
        success:true,
        message:"User Update successfuly",
        data:result
    })

})


export const UserController={
    createAdmin,
    updateAdminAndSuperAdmin,
    updateUser
}