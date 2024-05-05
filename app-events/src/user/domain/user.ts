import { AggregateRoot } from '@nestjs/cqrs';

import { UserCreatedEvent } from './events/user-created.event';
import { UserUpdatedEvent } from './events/user-updated.event';

export class User extends AggregateRoot {
  private readonly id: string;
  private name: string;
  private email: string;
  private password: string;

  constructor(id: string, name: string, email: string, password: string) {
    super();
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;

    this.apply(new UserCreatedEvent(id, name, email));
  }

  update(name: string, email: string) {
    this.name = name;
    this.email = email;

    this.uncommit();
    this.apply(new UserUpdatedEvent(this.id, name, email));
  }

  get properties() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
    };
  }
}
