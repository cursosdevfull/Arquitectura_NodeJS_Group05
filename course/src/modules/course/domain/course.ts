import { validate } from 'uuid';

export interface CourseEssentials {
  title: string;
}

export interface CourseOptionals {
  courseId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export type CourseProperties = CourseEssentials & Partial<CourseOptionals>;

export class Course {
  private readonly courseId: string;
  private title: string;
  private createdAt: Date;
  private updatedAt: Date | undefined;
  private deletedAt: Date | undefined;

  constructor(props: CourseProperties) {
    if (!validate(props.courseId)) throw new Error('Invalid courseId');
    if (props.title.trim().length < 3)
      throw new Error('Title must be at least 3 characters long');

    Object.assign(this, props);

    if (props.createdAt) {
      this.createdAt = props.createdAt;
    } else {
      this.createdAt = new Date();
    }
  }

  get properties() {
    return {
      title: this.title,
      courseId: this.courseId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }
}
