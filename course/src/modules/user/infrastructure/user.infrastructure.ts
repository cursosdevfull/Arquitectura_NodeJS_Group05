import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UserRepository } from '../domain/repositories/user.repository';
import { User } from '../domain/user';
import { UserDto } from './dtos/user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserInfrastructure implements UserRepository {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly repository: Repository<UserEntity>,
  ) {}

  async save(user: User): Promise<User> {
    console.log(user);
    const userEntity = UserDto.fromDomainToData(user);
    await this.repository.save(userEntity);
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const userEntity = await this.repository.findOne({
      where: { email },
      relations: ['roles'],
    });
    if (!userEntity) return null;

    return UserDto.fromDataToDomain(userEntity);
  }

  async findByRefreshToken(refreshToken: string): Promise<User> {
    const userEntity = await this.repository.findOne({
      where: { refreshToken },
    });
    if (!userEntity) return null;

    return UserDto.fromDataToDomain(userEntity);
  }
}
