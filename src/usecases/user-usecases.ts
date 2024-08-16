import { UserRepository } from "data/repositories/user-repository";
import { CreateUserDto } from "domain/dtos/create-user.dto";

class UserUseCase {
  constructor(private userRepository: UserRepository) {}
  async createUser(data: CreateUserDto) {
    const user = await this.userRepository.createUser(data);
    return user;
  }
}

export default UserUseCase;
