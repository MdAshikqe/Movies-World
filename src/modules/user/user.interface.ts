import { USER_Role, USER_STATUS } from "./user.constants";

export type TUser ={
    name:string;
    role:keyof typeof USER_Role;
    email:string;
    password:string;
    status:keyof typeof USER_STATUS;
    passwordChangeAt?: Date;

}

