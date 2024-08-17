import prisma from "../prisma/prisma-client";
import { User } from "../../domain/entities/user";
import UserRepository from "../../app/repositories/user-repository";

class UserRepositoryPrisma implements UserRepository {
  async createUser(user: User): Promise<User> {
    const result = await prisma.user.create({
      data: {
        name: user.name,
        avatar_url: user.avatar_url,
        pix_key: user.pix_key,
      },
    });
    return result;
  }
}

export default UserRepositoryPrisma;
