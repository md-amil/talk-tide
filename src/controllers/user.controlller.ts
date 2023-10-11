import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';
import UserModal from '../models/user.modal';
import { Request, Response } from 'express';
import { MessageModal } from '../models';
import jwt from 'jsonwebtoken'
import { CustomRequest } from '../middleware/auth';

export async function get(req: Request, res: Response) {
    const users = await UserModal.find()
    return res.json(users)
}
 export async function show(req: Request, res: Response) {
    const user = UserModal.findById(req.params.id)
    return  res.send("okey");
 }
 export async function login(req:Request,res:Response){
    const {email,password,phone} = req.params
    const user = UserModal.find({email,password})
 }
 export async function store(req: Request, res: Response) {
    const config: Config = {
        dictionaries: [names]
    }
    const characterName: string = uniqueNamesGenerator(config);
    const user = new UserModal({name:characterName,...req.body})
    user.save()
    let token = jwt.sign({ user: user }, 'secret-key');
    const {name,_id,createdAt} = user
    return res.json({_id,name,createdAt,token})
 }
 export function verifyToken(req:CustomRequest,res:Response){
    console.log({user:req.user})
    res.send("done")
 }

 export async function update(req:Request,res:Response){
    const user = await UserModal.findByIdAndUpdate(req.params.id,{...req.body})
    return user
 }
 export async function remove(req:Request,res:Response){
    const user = await  UserModal.findByIdAndDelete(req.params.id)
    return res.send( user)
 }

