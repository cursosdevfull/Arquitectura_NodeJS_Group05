import { injectable } from "inversify";

import { ScheduleRepository } from "../domain/repositories/schedule.repository";
import { Schedule } from "../domain/roots/schedule";

@injectable()
export class ScheduleInfrastructure implements ScheduleRepository {
  save(schedule: Schedule): Schedule {
    return schedule;
  }
}
