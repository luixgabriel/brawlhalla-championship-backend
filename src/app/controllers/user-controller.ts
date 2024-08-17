import { User } from "../../domain/entities/user";
import { HttpRequest } from "../../infra/http-adapter";
import UserUseCase from "../usecases/user-usecases";

export class UserController {
  constructor(private userUseCase: UserUseCase) {}
  createUser(httpRequest: HttpRequest) {
    // Implement user creation logic here
    const { name, avatar_url, pix_key } = httpRequest.body;

    const userData: User = {
      name,
      avatar_url,
      pix_key,
    };
  }
}
