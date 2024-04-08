import { CurrentDateVO, MinArrayVO, MinLengthVO, MinValueVO, UuidVO } from '@value-objects';

import { Schedule, ScheduleProps } from './schedule';

export class ScheduleFactory {
  static create(props: ScheduleProps): Schedule {
    UuidVO.create(props.scheduleId, "Invalid scheduleId");
    if (props.sessions)
      MinArrayVO.create(
        props.sessions,
        "Schedule must have at least one session"
      );
    if (props.duration)
      MinValueVO.create(props.duration, 1, "Duration must be at least 1.");

    CurrentDateVO.create(props.date, "Date must be in the future.");

    MinLengthVO.create(
      props.title,
      10,
      "Title must be at least 10 characters long."
    );

    return new Schedule(props);
  }
}
