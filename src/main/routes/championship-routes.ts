import { Router } from "express";
import { adaptRoute } from "../adapters/adapter-route";
import { ChampionshipController } from "../../app/controllers/championship-controller";
import { makeChampionshipUseCase } from "../factories/championship-factory";
const championshipController = new ChampionshipController(
  makeChampionshipUseCase()
);
export const ChampionshipRoutes = (router: Router): void => {
  const prefix = "/championship";
  router.get(
    prefix + "/last-champion",
    adaptRoute(championshipController, "getLastChampion")
  );
};
