import { User } from "../../domain/entities/user";

abstract class UserRepository {
  abstract createUser(user: User): Promise<User>;
}

export default UserRepository;
