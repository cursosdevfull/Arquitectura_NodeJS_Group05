import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/modules/user/domain/repositories/user.repository';
import { UserInfrastructure } from 'src/modules/user/infrastructure/user.infrastructure';
import { TokenService } from 'src/modules/user/presentation/services/token.service';

import { CryptService } from '../../user/presentation/services/crypt.service';
import { Auth } from '../domain/auth';

@Injectable()
export class AuthApplication {
  constructor(
    @Inject(UserInfrastructure) private readonly repository: UserRepository,
  ) {}

  async login(auth: Auth) {
    const user = await this.repository.findByEmail(auth.properties.email);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    const isPasswordValid = await CryptService.compare(
      auth.properties.password,
      user.properties.password,
    );
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid password');
    }

    return {
      accessToken: TokenService.generateAccessToken(user),
      refreshToken: user.properties.refreshToken,
    };
  }
}
