import express from "express";
import regionRouter from "./regions";


const router = express.Router();

router.use('regions',regionRouter);




export default router;