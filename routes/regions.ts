import express from "express";
import { RegionHandler } from "../handlers/regions";

const regionRouter = express.Router();

const methods = new RegionHandler();

/**
 * @swagger
 * /api/regions:
 *   post:
 *     summary: Create a new region 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: The region name.
 *     responses:
 *       201:
 *         description: Region created successfully.
 */
regionRouter.get('/', methods.create);

export default regionRouter;