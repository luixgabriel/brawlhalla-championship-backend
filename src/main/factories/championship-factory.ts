import ChampionshipUseCase from "../../app/usecases/championship-usecases";
import ChampionShipRepositoryPrisma from "../../infra/repositories/championship-repository";
import UserRepositoryPrisma from "../../infra/repositories/user-repository";

export const makeChampionshipUseCase = () => {
  const championshipRepository = new ChampionShipRepositoryPrisma();
  const usersRepository = new UserRepositoryPrisma();
  const championshipUseCase = new ChampionshipUseCase(
    championshipRepository,
    usersRepository
  );

  championshipUseCase.startCronJob();

  return championshipUseCase;
};
