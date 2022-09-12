import { Router } from "express";

import {
  createCard,
  deleteCard,
  getAllCards,
  getCard,
} from "../controllers/cardController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/authMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { cardSchema } from "../schemas/cardSchema.js";

const cardRouter = Router();

cardRouter.use(ensureAuthenticatedMiddleware);
cardRouter.get("/cards", getAllCards);
cardRouter.get("/cards/:id", getCard);
cardRouter.post("/cards", validateSchemaMiddleware(cardSchema), createCard);
cardRouter.delete("/cards/:id", deleteCard);

export default cardRouter;
