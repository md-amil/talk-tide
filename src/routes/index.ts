import { Router } from "express";
const routes = Router();
import conversationRouter from "./conversation.route";
import messageRouter from "./message.route";
import userRouter from './user.route'
import postRouter from './post.route'


routes.get('/',(req,res)=>res.send("working"))
routes.use("/conversations", conversationRouter);
routes.use("/messages", messageRouter);
routes.use("/users", userRouter);
routes.use("/posts", postRouter);

export default routes;
