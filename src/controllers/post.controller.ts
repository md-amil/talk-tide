import { Request, Response } from "express";
import { MessageModal } from "../models";
import PostModal from "../models/post.modal";
import { CustomRequest } from "../middleware/auth";

export async function get(req: Request, res: Response) {
  const posts = await PostModal.find();
  return res.json(posts);
}
export async function show(req: Request, res: Response) {
  return res.send("okey");
}
export async function store(req: CustomRequest, res: Response) {
  console.log(req.body,"body")
  const body = { ...req.body, userId: req.user._id };
  const post = new PostModal(body);
  post.save();
  return res.send(post);
}
export async function update(req: Request, res: Response) {
  return res.send("okey");
}
export async function remove(req: Request, res: Response) {
  return res.send("okey");
}
