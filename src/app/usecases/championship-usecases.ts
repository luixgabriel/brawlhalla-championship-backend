import { User } from "../../domain/entities/user";
import ChampionShipRepository from "../../infra/repositories/championship-repository";
import UserRepository from "../repositories/user-repository";

class ChampionshipUseCase {
  constructor(private championshipRepository: ChampionShipRepository) {}

  async getLastChampion() {
    const user = await this.championshipRepository.lastChampion();
    return user;
  }
}

export default ChampionshipUseCase;
