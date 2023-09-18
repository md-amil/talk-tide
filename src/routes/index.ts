import { Router } from "express";
const routes = Router()
import conversationRouter from "./conversation.route";

routes.use('/conversations',conversationRouter)
// routes.get("/apple",(req,res)=>res.send("apple routes"))
export default routes