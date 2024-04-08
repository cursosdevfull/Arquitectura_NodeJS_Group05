import { inject, injectable } from "inversify";

import { ScheduleRepository } from "../domain/repositories/schedule.repository";
import { Schedule } from "../domain/roots/schedule";

@injectable()
export class ScheduleSaveApplication {
  constructor(
    @inject("ScheduleRepository")
    private readonly repository: ScheduleRepository
  ) {}

  execute(schedule: Schedule): Schedule {
    return this.repository.save(schedule);
  }
}
