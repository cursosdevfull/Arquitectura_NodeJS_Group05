import { Course } from '../course';

export interface CourseRepository {
  getAllCourses(): Promise<object[]>;
  save(course: Course): Promise<void>;
}
