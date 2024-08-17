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
}
