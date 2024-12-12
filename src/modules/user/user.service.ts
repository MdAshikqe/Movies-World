import { TUser } from "./user.interface";
import { User } from "./user.model";

const createAdmin =async(payload:TUser)=>{
    const result=await User.create(payload)
    return result;
}
const updateAdminAndSuperAdmin= async(_id:string, payload:TUser)=>{
    const result= await User.findByIdAndUpdate({_id},payload)
    return result;
}

const updateUser= async(payload:TUser)=>{
    const result= await User.findOne({email:payload.email})
    return result
}



export const UserService={
    createAdmin,
    updateAdminAndSuperAdmin,
    updateUser
}