import { Application } from "express";
import gamesRouter from "./games";

const setupRoutes = (app: Application) => {
  app.use("/games", gamesRouter);
};

export default setupRoutes;
