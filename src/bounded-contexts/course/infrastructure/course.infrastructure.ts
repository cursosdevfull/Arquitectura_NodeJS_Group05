import { Course } from "@course/roots/course";
import { injectable } from "inversify";

import { CourseRepository } from "../domain/repositories/course.repository";

@injectable()
export class CourseInfrastructure implements CourseRepository {
  findBySlug(slug: string): boolean {
    return false;
  }

  save(course: Course): Course {
    this.setCache();
    return course;
  }

  invalidateCache(): void {
    console.log("Cache invalidated");
  }

  getCache(): void {
    console.log("Cache returned");
  }

  setCache(): void {
    console.log("Cache set");
  }
}
