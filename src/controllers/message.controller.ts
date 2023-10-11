import { Request, Response } from "express";
import { MessageModal } from "../models";

export async function get(req: Request, res: Response) {
   const messages =  await MessageModal.find()
   return res.json(messages)
}
export async function show(req: Request, res: Response) {
   return  res.send("okey");
}
export async function store(req: Request, res: Response) {
   const message = new MessageModal(req.body)
   message.save()
   return res.send(message)
}
export async function update(req: Request, res: Response) {
   return  res.send("okey");
}
export async function remove(req: Request, res: Response) {
   return  res.send("okey");
}
