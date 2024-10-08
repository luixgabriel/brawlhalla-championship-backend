import { Championship } from "../../domain/entities/championship";

abstract class ChampionShipRepository {
  abstract lastChampion(): Promise<Championship>;
  abstract finishChampionship(id: string): Promise<Championship>;
  abstract findChampionshipByStatus(): Promise<Championship>;
  abstract getChampionshipEndDate(): Promise<Date>;
  abstract currentChampionship(): Promise<Championship>;
  abstract createChampionship(end_date: Date): Promise<Championship>;
}

export default ChampionShipRepository;
