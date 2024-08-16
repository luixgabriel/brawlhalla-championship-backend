import { UserRepository } from 'data/repositories/user-contracts'
import { User } from 'domain/entities/user'

export class UsersService {
  constructor (private readonly usersRepository: UserRepository) {}

  async createUser (): Promise<User> {
    if (new Date().getHours() > 22) {
      throw new RankingUnavailableError()
    }
    return this.loadLastRankingRepository.loadLastRanking()
  }
}
