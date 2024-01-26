import { NextFunction, Request, Response } from "express";
import jwt,{ JsonWebTokenError } from "jsonwebtoken";

interface User {
    id: string;
    name: string;
}

export interface CustomRequest extends Request {
    user?: any;
}

export default function auth(req:CustomRequest, res:Response, next:NextFunction) {
    try {
        const bearerHeader = req.headers['authorization'];
        if(!bearerHeader) return res.send("Auth token required")
        const bearerToken = bearerHeader.split(' ')[1];
        jwt.verify(bearerToken, 'secret-key', (error:any, authData:any) => {
            if(error) return res.send("not logged in")
            req.user = authData.user
            next();
        })
    }
    catch {
        res.send("something went wrong")
    }
}
