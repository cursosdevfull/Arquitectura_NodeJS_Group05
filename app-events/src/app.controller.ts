import { Controller, Get } from '@nestjs/common';
import { EventBus, EventPublisher } from '@nestjs/cqrs';

import { AppService } from './app.service';
import { UserCreatedEvent } from './user/domain/events/user-created.event';
import { UserUpdatedEvent } from './user/domain/events/user-updated.event';
import { User } from './user/domain/user';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private publisher: EventPublisher,
    private eventBus: EventBus,
  ) {}

  @Get()
  getHello(): string {
    const user = this.publisher.mergeObjectContext(
      new User('1', 'John Doe', 'john.doe@email.com', '12345'),
    );
    user.commit();
    return this.appService.getHello();
  }

  @Get('event')
  getEvent(): string {
    this.eventBus.publish(
      new UserCreatedEvent('2', 'Jane Doe', 'jane.doe@email.com'),
    );
    return 'Event published';
  }

  @Get('update')
  update(): string {
    const user = new User('3', 'Jimmy Smith', 'jimmy.smith@email.com', '12345');
    user.update('Jimmy Doe', 'jimmy.doe@email.com');

    const { id, name, email } = user.properties;

    this.eventBus.publish(new UserUpdatedEvent(id, name, email));

    //user.commit();

    return 'user updated';
  }

  @Get('update2')
  update2(): string {
    const user = this.publisher.mergeObjectContext(
      new User('3', 'Jimmy Smith', 'jimmy.smith@email.com', '12345'),
    );
    user.update('Jimmy Doe', 'jimmy.doe@email.com');

    user.commit();

    return 'user updated';
  }
}
