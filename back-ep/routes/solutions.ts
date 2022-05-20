import express, { Request, Response } from "express";
import { pool } from "../src/utils/dbClient";

const solutionsRouter = express.Router();

// ------------------------------------------GET GAMES

solutionsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const sql = 'SELECT * FROM public."Solutions"';
    const solutionsData: any = await pool.query(sql);
    const solutions = solutionsData.rows;
    res.status(201).send(solutions);
  } catch (err) {
    res.status(400).send(err);
  }
});

export default solutionsRouter;
