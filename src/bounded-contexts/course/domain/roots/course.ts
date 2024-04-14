import { Goal, Requeriment, Syllabus } from "@course/entities";

export interface CourseEssentials {
  courseId: string;
  title: string;
}

export interface CourseOptionals {
  slug: string;
  goals: Goal[];
  requeriments: Requeriment[];
  syllabus: Syllabus[];
}

export type CourseProps = CourseEssentials & Partial<CourseOptionals>;

export class Course {
  private readonly courseId: string;
  private title: string;
  private slug: string | undefined;
  private goals: Goal[] | undefined;
  private requeriments: Requeriment[] | undefined;
  private syllabus: Syllabus[] | undefined;

  constructor(props: CourseProps) {
    Object.assign(this, props);
  }

  get properties() {
    return {
      courseId: this.courseId,
      title: this.title,
      slug: this.slug,
      goals: this.goals,
      requeriments: this.requeriments,
      syllabus: this.syllabus,
    };
  }
}
