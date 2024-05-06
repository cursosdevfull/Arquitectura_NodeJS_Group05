import { Module } from '@nestjs/common';
import { UserModule } from 'src/modules/user/presentation/user.module';

import { AuthApplication } from '../application/auth.application';
import { AuthController } from './auth.controller';

@Module({
  providers: [AuthApplication],
  controllers: [AuthController],
  imports: [UserModule],
})
export class AuthModule {}
