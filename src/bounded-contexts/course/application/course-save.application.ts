import { Course, CourseProps } from "@course/roots/course";
import { CourseFactory } from "@course/roots/course-factory";
import { inject, injectable } from "inversify";

import { CourseRepository } from "../domain/repositories/course.repository";

@injectable()
export class CourseSaveApplication {
  constructor(
    @inject("CourseRepository") private readonly repository: CourseRepository
  ) {}

  execute(props: CourseProps): Course {
    const existsSlug = this.repository.findBySlug(props.slug);

    if (!existsSlug) {
      const course = CourseFactory.create(props);
      const courseSaved = this.repository.save(course);
      return courseSaved;
    }
  }
}
