import { z } from "zod";
import { USER_Role, USER_STATUS } from "./user.constants";

const createAdminValidations= z.object({
    body:z.object({
    name:z.string(),
    role:z.nativeEnum(USER_Role),
    email:z.string().email(),
    password: z.string(),
    status:z.nativeEnum(USER_STATUS).default("ACTIVE")
    })
})
const updateUserAdminValidations= z.object({
    body:z.object({
    name:z.string().optional(),
    role:z.nativeEnum(USER_Role).optional(),
    status:z.nativeEnum(USER_STATUS).optional()
    })
})

const updateUserValidation=z.object({
    body:z.object({
    name:z.string().optional(),
    })
})

export const UserValidations ={
    createAdminValidations,
    updateUserAdminValidations,
    updateUserValidation
}