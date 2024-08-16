import { HttpRequest, HttpResponse } from "infra/http-adapter";
import UserUseCase from "usecases/user-usecases";

export class UserController {
  private readonly userUseCase: UserUseCase;
  constructor(userUseCase: UserUseCase) {
    this.userUseCase = userUseCase;
  }
  async createUser(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = this.userUseCase.createUser(httpRequest.body);
      return {
        status: 201,
        body: user,
      };
    } catch (error: any) {
      return {
        status: error.status,
        message: error.message,
      };
    }
  }
}
