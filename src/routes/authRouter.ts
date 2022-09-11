import { Router } from "express";
const authRouter = Router();

import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { userSchema } from "../schemas/userSchema.js";
import { signIn, signUp } from "./../controllers/authController.js";

authRouter.post("/signup", validateSchemaMiddleware(userSchema), signUp);
authRouter.post("/signin", validateSchemaMiddleware(userSchema), signIn);

export default authRouter;
