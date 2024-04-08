import { Schedule } from "../roots/schedule";

export interface ScheduleRepository {
  save(schedule: Schedule): Schedule;
}
