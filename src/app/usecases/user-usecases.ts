import { User } from "../../domain/entities/user";
import UserRepository from "../repositories/user-repository";


class UserUseCase {
  constructor(private userRepository: UserRepository) {}
  async createUser(data: User) {
    const user = await this.userRepository.createUser(data);
    return user;
  }
}

export default UserUseCase;
