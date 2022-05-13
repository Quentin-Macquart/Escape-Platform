import express, { Request, Response } from "express";
const dataRouter = express.Router();

// ------------------------------------------ Router TEST

dataRouter.get("/", async (req: Request, res: Response) => {
  try {
    const test = {
      titre: "Test",
      array: [],
      object: {},
      string: "Hello this is Router test",
    };
    res.status(201).json(test);
  } catch (err) {
    res.status(400).send(err);
  }
});

export default dataRouter;
