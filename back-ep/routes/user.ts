import express, { Request, Response } from "express";
import { pool } from "../src/utils/dbClient";

const userRouter = express.Router();

// ------------------------------------------GET GAMES

userRouter.get("/", async (req: Request, res: Response) => {
  try {
    const sql = 'SELECT * FROM public."Users"';
    const userData: any = await pool.query(sql);
    const user = userData.rows;
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

export default userRouter;
