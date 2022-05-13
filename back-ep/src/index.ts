import express, { Request, Response, Application } from "express";
import setupRoutes from "../routes";
import cors from "cors";
import { DB_PORT } from "./conf";

const port: string | number = DB_PORT || 8080;
export const app: Application = express();
app.use(express.json());
app.use(cors());
setupRoutes(app);

app.use("/", (req: Request, res: Response): void => {
  res.send("Hello Typescript with Node.js!");
});

app.listen(port, (): void => {
  console.log(`Server Running here 👉 https://localhost:${port}`);
});
