import { Course } from "@course/roots/course";
import { inject, injectable } from "inversify";

import { CourseRepository } from "../domain/repositories/course.repository";
import { CourseMemory, ICourseMemory } from "./course-memory";
import { CourseDto } from "./dtos/course.dto";

@injectable()
export class CourseInfrastructure implements CourseRepository {
  constructor(
    @inject("CourseMemory") private readonly courseMemory: CourseMemory
  ) {}

  async findBySlug(slug: string): Promise<boolean> {
    return await this.courseMemory.findBySlug(slug);
  }

  async save(course: Course): Promise<Course> {
    const courseMemory = CourseDto.fromDomainToData(course) as ICourseMemory;
    await this.courseMemory.save(courseMemory);
    return Promise.resolve(course);
  }
}
