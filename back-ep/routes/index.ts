import { Application } from "express";
import gamesRouter from "./games";
import dataRouter from "./data";
import userRouter from "./user";
import solutionsRouter from "./solutions";
import stepsRouter from "./steps";

const setupRoutes = (app: Application) => {
  app.use("/games", gamesRouter);
  app.use("/data", dataRouter);
  app.use("/steps", stepsRouter);
  app.use("/solutions", solutionsRouter);
  app.use("/user", userRouter);
};

export default setupRoutes;
