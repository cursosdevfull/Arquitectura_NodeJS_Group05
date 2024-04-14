import { Course, CourseProps } from "@course/roots/course";
import { CourseFactory } from "@course/roots/course-factory";
import { inject, injectable } from "inversify";
import slugify from "slugify";

import { CourseRepository } from "../domain/repositories/course.repository";

@injectable()
export class CourseSaveApplication {
  constructor(
    @inject("CourseRepository") private readonly repository: CourseRepository
  ) {}

  async execute(props: CourseProps): Promise<Course> {
    let existsSlug: boolean;
    let slug: string;
    let counter = 0;
    do {
      slug = slugify(props.title, { lower: true });
      if (counter > 0) slug = `${slug}-${counter}`;
      existsSlug = await this.repository.findBySlug(slug);
      counter++;
    } while (existsSlug);

    const propsWithSlug = { ...props, slug };
    const course = CourseFactory.create(propsWithSlug);
    const courseSaved = await this.repository.save(course);
    return courseSaved;
  }
}
