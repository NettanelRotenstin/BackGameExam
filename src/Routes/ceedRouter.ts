import { Request, Response } from "express";
import { ceed } from "../Services/ceedService";

export const ceedRouter = async (req:Request,res:Response) => {
    try {
        await ceed()
        res.status(201).send()
    } catch (error) {
        
        console.log(error);
        res.status(500)
    }
}