import { User } from "../../domain/entities/user";

abstract class UserRepository {
  abstract createUser(user: User): Promise<User>;
  abstract getUserByVictorys(): Promise<User[]>;
  abstract findUserById(id: string): Promise<User | null>;
  abstract addVictory(id: string): Promise<User>;
  abstract removeVictory(id: string): Promise<User>;
  abstract userWithMostVictory(): Promise<User | null>;
}

export default UserRepository;
