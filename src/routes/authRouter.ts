import { Router } from "express";
const authRouter = Router();

import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { userSchema } from "../schemas/userSchema";
import { signIn, signUp } from "./../controllers/authController";

authRouter.post("/signup", validateSchemaMiddleware(userSchema), signUp);
authRouter.post("/signin", validateSchemaMiddleware(userSchema), signIn);

export default authRouter;
