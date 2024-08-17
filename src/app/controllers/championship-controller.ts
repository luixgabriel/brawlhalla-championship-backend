import { HttpRequest } from "../../infra/http/http-adapter";
import ChampionshipUseCase from "../usecases/championship-usecases";

export class ChampionshipController {
  constructor(private readonly championshipUseCase: ChampionshipUseCase) {}

  async getLastChampion(httpRequest: HttpRequest) {
    const user = await this.championshipUseCase.getLastChampion();
    return {
      status: 200,
      body: user,
    };
  }

  async getCurrentChampionship(httpRequest: HttpRequest){
    const championship = await this.championshipUseCase.getCurrentChampionship();
    return {
      status: 200,
      body: championship,
    };
  }
}
