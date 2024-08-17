import { Championship } from "../../domain/entities/championship";

abstract class ChampionShipRepository {
  abstract lastChampion(): Promise<Championship>;
}

export default ChampionShipRepository;
