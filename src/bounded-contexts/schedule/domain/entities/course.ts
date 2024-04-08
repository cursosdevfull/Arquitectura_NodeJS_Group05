import { UuidVO } from '@value-objects';

export class Course {
  private courseId: string;

  constructor(courseId: string) {
    UuidVO.create(courseId, "Invalid course id");

    this.courseId = courseId;
  }

  get properties() {
    return {
      courseId: this.courseId,
    };
  }
}
