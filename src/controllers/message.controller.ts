import { Request, Response } from "express";

export async function get(req: Request, res: Response) {
   return res.json( [
      {
         name:"amil",
         age :20,
         lastMessage:"hello"
      },
      {
         name:"amil",
         age :20,
         lastMessage:"hello"
      },
      {
         name:"amil",
         age :20,
         lastMessage:"hello"
      },
      {
         name:"amil",
         age :20,
         lastMessage:"hello"
      },
      {
         name:"amil",
         age :20,
         lastMessage:"hello"
      }
   ]);
}
export async function show(req: Request, res: Response) {
   return  res.send("okey");
}
export async function store(req: Request, res: Response) {
   return  res.send("okey");
}
export async function update(req: Request, res: Response) {
   return  res.send("okey");
}
export async function remove(req: Request, res: Response) {
   return  res.send("okey");
}
