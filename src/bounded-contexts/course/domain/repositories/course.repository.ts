import { Course } from "@course/roots/course";

export interface CourseRepository {
  findBySlug(slug: string): Promise<boolean>;
  save(course: Course): Promise<Course>;
}
