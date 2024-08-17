
import { Championship } from "../../domain/entities/championship";
import prisma from "../../infra/prisma/prisma-client";
import ChampionShipRepository from "../../infra/repositories/championship-repository";

class ChampionShipRepositoryPrisma implements ChampionShipRepository {
  async lastChampion(): Promise<Championship> {
    const result = await prisma.championship.findFirst({
      where: {
        status: "COMPLETED",
      },
      orderBy: {
        end_date: "desc",
      },
      include: {
        champion: true,
      },
    });
    return result as Championship;
  }
}

export default ChampionShipRepositoryPrisma;
