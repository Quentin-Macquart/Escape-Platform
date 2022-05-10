import express, { Request, Response, Application } from "express";
import "dotenv/config";

const backPort: any = process.env.BACK_PORT;

const app: Application = express();
// const { setupRoutes } = require("./routes");

// app.use(cors());

app.use(express.json());
// setupRoutes(app);

app.use("/", (req: Request, res: Response): void => {
  res.send("Hello Typescript with Node.js!");
});

app.listen(backPort, (): void => {
  console.log(`Server Running here 👉 https://localhost:${backPort}`);
});