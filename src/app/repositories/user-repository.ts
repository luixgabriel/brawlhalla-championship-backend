import { User } from "../../domain/entities/user";

abstract class UserRepository {
  abstract createUser(user: User): Promise<User>;
  abstract getUserByVictorys(): Promise<User[]>;
}

export default UserRepository;
