import { Body, Controller, Inject, Post } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { UserApplication } from '../application/user.application';
import { Role } from '../domain/entities/role';
import { User, UserProperties } from '../domain/user';
import { UserCreateDto } from './dtos/user-create.dto';
import { CryptService } from './services/crypt.service';
import { TokenService } from './services/token.service';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserApplication) private readonly application: UserApplication,
  ) {}

  @Post()
  async create(@Body() body: UserCreateDto) {
    const userProperties: UserProperties = {
      ...body,
      id: uuidv4(),
      roles: body.roles as Role[],
      password: await CryptService.hash(body.password),
      refreshToken: TokenService.generateRefreshToken(),
    };

    const user = new User(userProperties);
    const userSaved = await this.application.save(user);

    return userSaved;
  }
}
