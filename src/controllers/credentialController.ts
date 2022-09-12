import { Credential } from "@prisma/client";
import { Request, Response } from "express";
import credentialService from "../services/credentialService.js";

export async function getAllCredentials(req: Request, res: Response) {
  const { user } = res.locals;
  const credentials: Credential[] = await credentialService.getAllCredentials(
    user.id
  );

  res.send(credentials);
}

export async function getCredential(req: Request, res: Response) {
  const { user } = res.locals;
  const credentialId = parseInt(req.params.id);
  if (isNaN(credentialId)) {
    res.sendStatus(422); // unprocessable entity
  }

  const credential = await credentialService.getCredential(
    user.id,
    credentialId
  );
  res.send(credential);
}

export async function createCredential(req: Request, res: Response) {
  const { user } = res.locals;
  const credential = req.body;

  await credentialService.createCredential(user, credential);
  res.sendStatus(201); // created
}

export async function deleteCredential(req: Request, res: Response) {
  const credentialId = parseInt(req.params.id);
  if (isNaN(credentialId)) {
    res.sendStatus(422); // unprocessable entity
  }

  const { user } = res.locals;
  await credentialService.deleteCredential(user, credentialId);
  res.sendStatus(200);
}
