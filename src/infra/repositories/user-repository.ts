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

  async getUserByVictorys(): Promise<User[]> {
    const result = await prisma.user.findMany({
      orderBy: { victorys: "desc" },
    });
    return result;
  }
  async findUserById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user ? user : null;
  }

  async addVictory(id: string): Promise<User> {
    const updateUser = await prisma.user.update({
      where: { id },
      data: { victorys: { increment: 1 } },
    });

    return updateUser;
  }

  async removeVictory(id: string): Promise<User> {
    const updateUser = await prisma.user.update({
      where: { id },
      data: { victorys: { decrement: 1 } },
    });

    return updateUser;
  }

  async userWithMostVictory(): Promise<User | null> {
    const user = await prisma.user.findFirst({
      orderBy: {
        victorys: "desc",
      },
    });

    return user;
  }
}

export default UserRepositoryPrisma;
