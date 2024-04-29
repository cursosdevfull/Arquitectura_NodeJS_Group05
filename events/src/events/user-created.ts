import { IDomainEvent } from "./domain-event.interface";

export class UserCreated implements IDomainEvent {
  dateTimeOccurred: Date;
  user: User;
  getAggregateId(): string {
    throw new Error("Method not implemented.");
  }
}
