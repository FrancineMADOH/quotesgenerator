import { Request,Response } from "express";
import { RegionStore } from "../models/regions";

const store = new RegionStore();

export class RegionHandler {

    async create(req:Request, res:Response){
        try {
            console.log("This is  a test")
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
            
        }
    }
}
