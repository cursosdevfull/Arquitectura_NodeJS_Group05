import { Course, Session } from "@schedule/entities";

export interface ScheduleEssentials {
  scheduleId: string;
  course: Course;
  date: Date;
  title: string;
}

export interface ScheduleOptionals {
  sessions: Session[];
  duration: number;
}

export type ScheduleProps = ScheduleEssentials & Partial<ScheduleOptionals>;

export class Schedule {
  private readonly scheduleId: string;
  private course: Course;
  private date: Date;
  private title: string;
  private sessions: Session[] | undefined;
  private duration: number | undefined;

  constructor(props: ScheduleProps) {
    Object.assign(this, props);
  }

  get properties() {
    return {
      scheduleId: this.scheduleId,
      course: this.course,
      date: this.date,
      title: this.title,
      sessions: this.sessions,
      duration: this.duration,
    };
  }
}
