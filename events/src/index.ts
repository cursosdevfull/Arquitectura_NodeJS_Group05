import { DomainEvents } from "./events/domain-events";
import { Enroll } from "./events/enroll";
import { Log } from "./events/log";
import { User } from "./events/user";

const log = new Log();
const enroll = new Enroll();

const user01 = new User("John Doe", true);
const user02 = new User("Jane Doe", false);

// Database operations, notifications, etc.
DomainEvents.dispatchEventsForAggregate(user01.id);

DomainEvents.dispatchEventsForAggregate(user02.id);
