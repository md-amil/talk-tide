import { Request, Response } from "express";
import {ConversationModal} from '../models'
export async function get(req: Request, res: Response) {
    const conversations = await ConversationModal.find()
    res.json(conversations)
}
export async function show(req: Request, res: Response) {
const {id} = req.params
   return   ConversationModal.findById(id);
}
export async function store(req: Request, res: Response) {
   const {name} = req.body
   const newConversation = new ConversationModal({name})
     newConversation.save();
     res.send(newConversation)
 }
export async function update(req: Request, res: Response) {
   return  res.send("okey");
}
export async function remove(req: Request, res: Response) {
   return  res.send("okey");
}
