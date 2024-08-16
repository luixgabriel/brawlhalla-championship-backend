import { CreateUserDto } from "domain/dtos/create-user.dto";
import { User } from "domain/entities/user";

export class UserRepository {
  createUser: (dot: CreateUserDto) => Promise<User>;
}
