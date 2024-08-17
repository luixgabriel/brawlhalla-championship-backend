import ChampionshipUseCase from "../../app/usecases/championship-usecases";
import ChampionShipRepositoryPrisma from "../../infra/repositories/championship-repository";

export const makeChampionshipUseCase = () => {
  const championshipRepository = new ChampionShipRepositoryPrisma();
  const championshipUseCase = new ChampionshipUseCase(championshipRepository);

  championshipUseCase.startCronJob();

  return championshipUseCase;
};
