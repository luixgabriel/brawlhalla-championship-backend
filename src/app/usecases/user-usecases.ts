import { User } from "../../domain/entities/user";
import HttpError from "../errors/http-error";
import UserRepository from "../repositories/user-repository";

class UserUseCase {
  constructor(private userRepository: UserRepository) {}
  async createUser(data: User) {
    const user = await this.userRepository.createUser(data);
    return user;
  }

  async getUsersByVictory() {
    const users = await this.userRepository.getUserByVictorys();
    return users;
  }

  async findUserById(id: string) {
    const user = await this.userRepository.findUserById(id);
    if (!user) throw new HttpError(404, "Project not found");
    return user;
  }

  async addVictory(id: string) {
    const user = await this.findUserById(id);
    if (!user) throw new HttpError(404, "User not found");
    const updateUser = await this.userRepository.addVictory(id);
    return updateUser;
  }

  async removeVictory(id: string) {
    const user = await this.findUserById(id);
    if (!user) throw new HttpError(404, "User not found");
    const updateUser = await this.userRepository.removeVictory(id);
    return updateUser;
  }
}

export default UserUseCase;
