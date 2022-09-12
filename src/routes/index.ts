import { Router } from "express";

import authRouter from "./authRouter.js";
import credentialRouter from "./credentialRouter.js";
import safeNoteRouter from "./safeNoteRouter.js";
import cardRouter from "./cardRouter.js";
import networkRouter from "./networkRouter.js";

const router = Router();

router.use(authRouter);
router.use(credentialRouter);
router.use(safeNoteRouter);
router.use(cardRouter);
router.use(networkRouter);

export default router;
