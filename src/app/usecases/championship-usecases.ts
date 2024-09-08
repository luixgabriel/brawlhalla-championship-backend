import { addBusinessDays, isAfter, isBefore, isSameDay } from "date-fns";
import ChampionShipRepository from "../../infra/repositories/championship-repository";
import { toZonedTime, format } from "date-fns-tz";
import cron from "node-cron";
import UserRepository from "../repositories/user-repository";

class ChampionshipUseCase {
  constructor(
    private championshipRepository: ChampionShipRepository,
    private usersRepository: UserRepository
  ) {}

  async createChampionship() {
    const currentDate = new Date();

    const futureDate = addBusinessDays(currentDate, 15);
    await this.championshipRepository.createChampionship(futureDate);
  }

  async getLastChampion() {
    const user = await this.championshipRepository.lastChampion();
    return user;
  }

  async finishChampion() {
    const user = await this.usersRepository.userWithMostVictory();
    await this.championshipRepository.finishChampionship(user?.id as string);
  }

  async getChampionshipEndDate() {
    const championshipEndDate =
      await this.championshipRepository.getChampionshipEndDate();
    return championshipEndDate;
  }

  async getCurrentChampionship() {
    const championship =
      await this.championshipRepository.currentChampionship();
    return championship;
  }

  startCronJob() {
    const timeZone = "America/Sao_Paulo";

    cron.schedule("* * * * *", async () => {
      const championshipEndDate = await this.getChampionshipEndDate();
      const currentDateUtc = new Date();
      const currentDate = toZonedTime(currentDateUtc, timeZone);
      const targetTime = new Date(currentDate);
      targetTime.setHours(14, 0, 0, 0);

      console.log(
        `CRON CHAMADO: ${format(currentDate, "yyyy-MM-dd HH:mm:ssXXX", {
          timeZone,
        })}`
      );

      if (isSameDay(currentDate, championshipEndDate)) {
        await this.finishChampion();
        await this.usersRepository.removeAllVictories();
        await this.createChampionship();
        console.log("Campeonato concluído.");
      } else {
        console.log("Ainda não é o fim do campeonato ou não é a hora correta.");
      }
    });
  }
}

export default ChampionshipUseCase;
