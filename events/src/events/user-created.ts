import { IDomainEvent } from "./domain-event.interface";
import { User } from "./user";

export class UserCreated implements IDomainEvent {
  dateTimeOccurred: Date;
  user: User;

  constructor(user: User) {
    this.dateTimeOccurred = new Date();
    this.user = user;
  }

  getAggregateId(): string {
    return this.user.id;
  }
}
