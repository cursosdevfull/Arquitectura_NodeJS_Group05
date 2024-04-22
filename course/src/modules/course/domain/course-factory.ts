import { err, ok, Result } from 'neverthrow';
import { validate } from 'uuid';

import { BaseException } from '../../core/exceptions/base.exception';
import { ParametersException } from '../../core/exceptions/parameters.exception';
import { Course, CourseProperties } from './course';

export type CourseCreateResult = Result<Course, BaseException>;

export class CourseFactory {
  static create(props: CourseProperties): CourseCreateResult {
    if (!validate(props.courseId))
      return err(new ParametersException('Invalid courseId'));
    if (props.title.trim().length < 3)
      return err(
        new ParametersException('Title must be at least 3 characters long'),
      );

    return ok(new Course(props));
  }
}
