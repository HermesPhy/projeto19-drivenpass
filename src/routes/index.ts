import { Router } from "express";

const router = Router();

router.use(authRouter);
router.use(credentialRouter);

export default router;
