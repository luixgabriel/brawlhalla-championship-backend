import cors from "cors";
import express from "express";
import HttpServer from "./server";
import { UserRoutes } from "../../main/routes/user-routes";
import { ChampionshipRoutes } from "../../main/routes/championship-routes";

export default class ExpressAdapter extends HttpServer {
  app: any;

  constructor() {
    super();
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());
    // this.app.use(express.urlencoded({ extended: true }));
    UserRoutes(this.app);
    ChampionshipRoutes(this.app);
  }

  listen(port: number, callback: Function): void {
    this.app.listen(port, callback);
  }
}
