import { MinArrayVO, MinLengthVO, UuidVO } from '@value-objects';

import { Course, CourseProps } from './course';

export class CourseFactory {
  static create(props: CourseProps): Course {
    UuidVO.create(props.courseId, "Invalid courseId");
    MinArrayVO.create(props.goals, "Course must have at least one goal");
    MinArrayVO.create(
      props.requeriments,
      "Course must have at least one requeriment"
    );
    MinArrayVO.create(props.syllabus, "Course must have at least one syllabus");
    MinLengthVO.create(
      props.title,
      10,
      "Course title must be at least 10 characters long"
    );

    return new Course(props);
  }
}
