import { Router } from "express";

import {
  createSafeNote,
  deleteSafeNote,
  getAllSafeNotes,
  getSafeNote,
} from "../controllers/safeNoteController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/authMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { safeNoteSchema } from "../schemas/safeNoteSchema.js";

const safeNoteRouter = Router();

safeNoteRouter.use(ensureAuthenticatedMiddleware);
safeNoteRouter.get("/safenotes", getAllSafeNotes);
safeNoteRouter.get("/safenotes/:id", getSafeNote);
safeNoteRouter.post(
  "/safenotes/",
  validateSchemaMiddleware(safeNoteSchema),
  createSafeNote
);
safeNoteRouter.delete("/safenotes/:id", deleteSafeNote);

export default safeNoteRouter;
