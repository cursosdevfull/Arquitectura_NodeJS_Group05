import { Course } from "@course/roots/course";

export interface CourseRepository {
  findBySlug(slug: string): boolean;
  save(course: Course): Course;
}
