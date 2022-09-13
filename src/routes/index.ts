import { Router } from "express";

import authRouter from "./authRouter";
import credentialRouter from "./credentialRouter";
import safeNoteRouter from "./safeNoteRouter";
import cardRouter from "./cardRouter";
import networkRouter from "./networkRouter";

const router = Router();

router.use(authRouter);
router.use(credentialRouter);
router.use(safeNoteRouter);
router.use(cardRouter);
router.use(networkRouter);

export default router;
