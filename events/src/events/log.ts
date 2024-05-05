import { IDomainEvent } from "./domain-event.interface";
import { DomainEvents } from "./domain-events";
import { UserCreated } from "./user-created";

export class Log {
  constructor() {
    DomainEvents.register(this.showMessage, UserCreated.name);
  }

  showMessage(evt: IDomainEvent) {
    console.log(
      `Log: ${evt.getAggregateId()} (registered at ${evt.dateTimeOccurred})`
    );
  }
}
