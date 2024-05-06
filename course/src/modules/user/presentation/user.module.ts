import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/modules/database/database.module';

import { UserApplication } from '../application/user.application';
import { userProviders } from '../infrastructure/entities/user.provider';
import { UserInfrastructure } from '../infrastructure/user.infrastructure';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserInfrastructure, UserApplication, ...userProviders],
  exports: [UserInfrastructure],
})
export class UserModule {}
