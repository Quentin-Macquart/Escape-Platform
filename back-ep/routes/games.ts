import express, { Request, Response } from "express";
import { pool } from "../src/conf";

const gamesRouter = express.Router();

// ------------------------------------------GET GAMES

gamesRouter.get("/", async (req: Request, res: Response) => {
  try {
    const sql = 'SELECT * FROM public."Games"';
    const gamesData: any = await pool.query(sql);
    const games = gamesData.rows;
    res.status(201).json(games);
  } catch (err) {
    res.status(400).send(err);
  }
});

export default gamesRouter;
