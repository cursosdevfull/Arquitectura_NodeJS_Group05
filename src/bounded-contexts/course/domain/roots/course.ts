import { Goal, Requeriment, Syllabus } from '@course/entities';

export interface CourseProps {
  courseId: string;
  title: string;
  slug: string;
  goals: Goal[];
  requeriments: Requeriment[];
  syllabus: Syllabus[];
}

export class Course {
  private readonly courseId: string;
  private title: string;
  private slug: string;
  private goals: Goal[];
  private requeriments: Requeriment[];
  private syllabus: Syllabus[];

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
