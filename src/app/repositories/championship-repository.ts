import { Championship } from "../../domain/entities/championship";

abstract class ChampionShipRepository {
  abstract lastChampion(): Promise<Championship>;
  abstract finishChampionship(id: string): Promise<Championship>;
  abstract findChampionshipByStatus(): Promise<Championship>;
  abstract getChampionshipEndDate(): Promise<Date>;
  abstract defineChampion(id: string): Promise<Championship>;
}

export default ChampionShipRepository;
