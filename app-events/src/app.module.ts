import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserCreatedHandler } from './user/application/events/user-created.handler';
import { UserUpdatedHandler } from './user/application/events/user-updated.handler';

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [AppService, UserCreatedHandler, UserUpdatedHandler],
})
export class AppModule {}
