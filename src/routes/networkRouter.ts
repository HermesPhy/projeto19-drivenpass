import { Router } from "express";

import {
  createNetwork,
  deleteNetwork,
  getAllNetworks,
  getNetwork,
} from "../controllers/networkController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/authMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { networkSchema } from "../schemas/networkSchema.js";

const networkRouter = Router();

networkRouter.use(ensureAuthenticatedMiddleware);
networkRouter.get("/networks", getAllNetworks);
networkRouter.get("/networks/:id", getNetwork);
networkRouter.post(
  "/networks",
  validateSchemaMiddleware(networkSchema),
  createNetwork
);
networkRouter.delete("/networks/:id", deleteNetwork);

export default networkRouter;
