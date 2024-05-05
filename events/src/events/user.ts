import { AggregateRoot } from "./aggregate-root";
import { UserCreated } from "./user-created";

export class User extends AggregateRoot {
  private name: string;
  private active: boolean;

  constructor(name: string, active: boolean) {
    super();
    this.name = name;
    this.active = active;

    this.addDomainEvent(new UserCreated(this));
  }

  update() {}

  delete() {}
}
