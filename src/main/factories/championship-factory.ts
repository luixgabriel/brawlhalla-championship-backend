import ChampionShipRepositoryPrisma from "../../app/repositories/championship-repository";
import ChampionshipUseCase from "../../app/usecases/championship-usecases";

export const makeChampionshipUseCase = () => {
  const championshipRepository = new ChampionShipRepositoryPrisma();
  return new ChampionshipUseCase(championshipRepository);
};
