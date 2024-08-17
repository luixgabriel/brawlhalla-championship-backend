import { User } from "../../domain/entities/user";
import { HttpRequest } from "../../infra/http/http-adapter";
import UserUseCase from "../usecases/user-usecases";

export class UserController {
  constructor(private userUseCase: UserUseCase) {}
  async createUser(httpRequest: HttpRequest) {
    const { name, avatar_url, pix_key } = httpRequest.body;

    const userData: User = {
      name,
      avatar_url,
      pix_key,
    };

    const user = await this.userUseCase.createUser(userData);
    return {
      status: 201,
      body: user,
    };
  }

  async getUsersByVictorys(httpRequest: HttpRequest) {
    const users = await this.userUseCase.getUsersByVictory();
    return {
      status: 200,
      body: users,
    };
  }

  async addVictory(httpRequest: HttpRequest) {
    const { id } = httpRequest.params;
    const user = await this.userUseCase.addVictory(id);
    return {
      status: 200,
      body: user,
    };
  }

  async removeVictory(httpRequest: HttpRequest){
    const { id } = httpRequest.params;
    const user = await this.userUseCase.removeVictory(id);
    return {
      status: 200,
      body: user,
    };
  }
}
