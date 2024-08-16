import { CreateUserDto } from "domain/dtos/create-user.dto";
import { User } from "domain/entities/user";
import { CreateUser } from "domain/usecases/create-user";
import { Controller } from "presentation/contracts/controller";
import { HttpResponse, ok, serverError } from "presentation/contracts/http";

export class LoadLastRankingController implements Controller {
  constructor(private readonly createUser: CreateUser) {}

  async handle(dto: CreateUserDto): Promise<HttpResponse<User>> {
    try {
      const user = await this.createUser.create(dto);
      return ok(user);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
