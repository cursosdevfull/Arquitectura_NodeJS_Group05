import { AggregateRoot } from "./aggregate-root";
import { IDomainEvent } from "./domain-event.interface";

export class DomainEvents {
  static markedAggregates: AggregateRoot[] = [];
  static handlerMap: any = {};

  static markedAggregateToDispatch(aggregate: AggregateRoot) {
    const found = !!this.findMarkedAggregateById(aggregate.id);
    if (!found) this.markedAggregates.push(aggregate);
  }

  static findMarkedAggregateById(id: string): AggregateRoot | null {
    let found = null;
    for (const aggregate of this.markedAggregates) {
      if (aggregate.id === id) {
        found = aggregate;
        break;
      }
    }

    return found;
  }

  static register(cb: (evt: IDomainEvent) => void, eventClassName: string) {
    if (!this.handlerMap.hasOwnProperty(eventClassName)) {
      this.handlerMap[eventClassName] = [];
    }

    this.handlerMap[eventClassName].push(cb);
  }

  static dispatchEventsForAggregate(id: string) {
    const aggregate = this.findMarkedAggregateById(id);
    if (aggregate) {
      this.dispatchAggregateEvents(aggregate);
      aggregate.clearEvents();
      this.removeAggregateFromMarkedDispatchList(aggregate);
    }
  }

  static dispatchAggregateEvents(aggregate: AggregateRoot) {
    aggregate.domainEvents.forEach((event) => this.dispatch(event));
  }

  static dispatch(evt: IDomainEvent) {
    const eventClassName = evt.constructor.name;
    if (this.handlerMap.hasOwnProperty(eventClassName)) {
      const handlers = this.handlerMap[eventClassName];
      for (const handler of handlers) {
        handler(evt);
      }
    }
  }

  static removeAggregateFromMarkedDispatchList(agg: AggregateRoot) {
    const index = this.markedAggregates.findIndex(
      (aggregate) => aggregate.id === agg.id
    );
    this.markedAggregates.splice(index, 1);
  }
}
