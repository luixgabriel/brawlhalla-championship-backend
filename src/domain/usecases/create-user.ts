import { CreateUserDto } from "domain/dtos/create-user.dto";
import { User } from "domain/entities/user";

export interface CreateUser {
  create: (user_dto: CreateUserDto) => Promise<User>
}
