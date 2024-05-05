import { IDomainEvent } from "./domain-event.interface";
import { DomainEvents } from "./domain-events";
import { UserCreated } from "./user-created";

export class Enroll {
  constructor() {
    DomainEvents.register(this.startEnroll, UserCreated.name);
  }

  startEnroll(evt: IDomainEvent) {
    console.log(
      `Enroll: ${evt.getAggregateId()} (registered at ${evt.dateTimeOccurred})`
    );
  }
}
