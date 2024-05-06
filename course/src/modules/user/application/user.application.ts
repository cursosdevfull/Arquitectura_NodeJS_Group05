import { Inject, Injectable } from '@nestjs/common';

import { UserRepository } from '../domain/repositories/user.repository';
import { User } from '../domain/user';
import { UserInfrastructure } from '../infrastructure/user.infrastructure';

@Injectable()
export class UserApplication {
  constructor(
    @Inject(UserInfrastructure) private readonly repository: UserRepository,
  ) {}

  async save(user: User) {
    return await this.repository.save(user);
  }

  async findByEmail(email: string) {
    return await this.repository.findByEmail(email);
  }

  async findByRefreshToken(refreshToken: string) {
    return await this.repository.findByRefreshToken(refreshToken);
  }
}
