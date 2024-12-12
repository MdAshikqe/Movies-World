/* eslint-disable @typescript-eslint/no-explicit-any */
import config from "../../config";
import { USER_Role } from "../user/user.constants";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"


const register=async(payload:TUser):Promise<any>=>{
    const user=await User.findOne({email:payload.email})

    if(user){
        throw new Error("User already exists!")
    }
    //set user role
    payload.role= USER_Role.USER;

    //create user
    const newUser= await User.create(payload)
    
    return newUser;
}

const login=async (payload:TLoginUser)=>{
    const user= await User.findOne({email:payload.email}).select("+password")

    if(!user){
        throw new Error("User not found!")
    }

    if(user.status === "BLOCKED"){
        throw new Error("User is blocked!")
    }

    const isPasswordMatch= async(plainPassword:string, hashPassword:string):Promise<boolean>=>{
        const isMatch= await bcryptjs.compare(plainPassword,hashPassword)
        return isMatch;

    }

    if(!await isPasswordMatch(payload.password, user.password)){
        throw new Error("Password not matched!")
    }
    const jwtPayload={
        email:user.email,
        role:user.role,
    }

    const accessToken = jwt.sign(jwtPayload,config.jwt_access_secret as string, {
        expiresIn:config.jwt_access_expire_in,
    })

    const refressToken=jwt.sign(jwtPayload,config.jwt_refresh_secret as string,{
        expiresIn:config.jwt_refresh_expire_in
    })
    return{
        accessToken,
        refressToken
    }

}

export const AuthServices={
    register,
    login
}