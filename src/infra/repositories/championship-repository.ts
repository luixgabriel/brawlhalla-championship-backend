import { ChampionshipStatus } from "@prisma/client";
import { Championship } from "../../domain/entities/championship";
import prisma from "../../infra/prisma/prisma-client";
import ChampionShipRepository from "../../app/repositories/championship-repository";

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

  async finishChampionship(champion_id: string): Promise<Championship> {
    const championship = await this.findChampionshipByStatus();
    const result = await prisma.championship.update({
      where: {
        id: championship.id,
        status: ChampionshipStatus.ONGOING,
      },
      data: {
        status: ChampionshipStatus.COMPLETED,
        champion_id,
      },
    });

    return result as Championship;
  }

  async findChampionshipByStatus(): Promise<Championship> {
    const result = await prisma.championship.findFirst({
      where: {
        status: ChampionshipStatus.ONGOING,
        champion_id: null,
      },
    });

    return result as Championship;
  }

  async getChampionshipEndDate(): Promise<Date> {
    const championship = await this.findChampionshipByStatus();
    return championship.end_date;
  }

  async defineChampion(id: string): Promise<Championship> {
    const championship = await this.findChampionshipByStatus();
    const result = await prisma.championship.update({
      where: {
        id: championship.id,
      },
      data: {
        champion_id: id,
      },
    });

    return result as Championship;
  }
}

export default ChampionShipRepositoryPrisma;
