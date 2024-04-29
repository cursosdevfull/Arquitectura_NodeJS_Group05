import { IDomainEvent } from "./domain-event.interface";
import { DomainEvents } from "./domain-events";
import { Entity } from "./entity";

export abstract class AggregateRoot extends Entity {
  private _domainEvents: IDomainEvent[] = [];

  protected addDomainEvent(domainEvent: IDomainEvent) {
    this._domainEvents.push(domainEvent);
    DomainEvents.markedAggregateToDispatch(this);
  }

  get domainEvents(): IDomainEvent[] {
    return this._domainEvents;
  }

  get id(): string {
    return this._id;
  }

  clearEvents(): void {
    this._domainEvents.splice(0, this._domainEvents.length);
  }
}
