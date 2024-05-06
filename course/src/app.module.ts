import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/presentation/auth.module';
import { CourseModule } from './modules/course/presentation/course.module';
import { UserModule } from './modules/user/presentation/user.module';

@Module({
  imports: [CourseModule, ConfigModule.forRoot(), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
