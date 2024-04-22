import { CourseGetAllResult, CourseSaveResult } from '../../infrastructure/course.infrastructure';
import { Course } from '../course';

export interface CourseRepository {
  getAllCourses(): Promise<CourseGetAllResult>;
  save(course: Course): Promise<CourseSaveResult>;
}
