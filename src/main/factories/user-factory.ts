import UserUseCase from "../../app/usecases/user-usecases";
import UserRepositoryPrisma from "../../infra/repositories/user-repository";

export const makeUserUseCase = () => {
  const userRepository = new UserRepositoryPrisma();
  return new UserUseCase(userRepository);
};
