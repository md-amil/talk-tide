import { Request, Response } from "express";
import {ConversationModal} from '../models'
import conversationModal from "../models/conversation.modal";
export async function get(req: Request, res: Response) {
    const conversations =  await ConversationModal.find()
    res.json(conversations)
}
export async function show(req: Request, res: Response) {
   const {id} = req.params
   const response   = await ConversationModal.findById(id);
   res.json(response)
}
export async function store(req: Request, res: Response) {
   const {name} = req.body
   const newConversation = new ConversationModal({name})
     newConversation.save();
     res.send(newConversation)
 }
export async function update(req: Request, res: Response) {
   const {id} = req.params
   const {name} = req.body
   const response = await conversationModal.findByIdAndUpdate(id,{name},{new:true})
   return  res.json(response);
}
export async function remove(req: Request, res: Response) {
   const {id} = req.params
   const response = await conversationModal.findByIdAndDelete(id)
   return  res.send("okey");
}
