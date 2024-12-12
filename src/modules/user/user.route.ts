import express from "express";
import { UserController } from "./user.controller";
import validateZodRequest from "../../middleWare/validateZodRequext";
import { UserValidations } from "./user.validation";
import { auth } from "../../middleWare/auth";
import { USER_Role } from "./user.constants";


const router= express.Router();

router.post("/create-admin",validateZodRequest(UserValidations.createAdminValidations),
auth(USER_Role.ADMIN,USER_Role.SUPER_ADMIN),
UserController.createAdmin)


router.put("/:userId",validateZodRequest(UserValidations.updateUserAdminValidations),
auth(USER_Role.ADMIN,USER_Role.SUPER_ADMIN),
UserController.updateAdminAndSuperAdmin)

router.put("/:me",validateZodRequest(UserValidations.updateUserValidation),
auth(USER_Role.USER),
UserController.updateUser
)

export const UserRoutes= router;