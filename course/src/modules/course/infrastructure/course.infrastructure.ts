import { Course } from '../domain/course';
import { CourseRepository } from '../domain/repositories/course.repository';

export class CourseInfrastructure implements CourseRepository {
  private data = [
    { name: 'Course 1' },
    { name: 'Course 2' },
    { name: 'Course 3' },
    { name: 'Course 4' },
    { name: 'Course 5' },
    { name: 'Course 6' },
  ];

  async getAllCourses(): Promise<object[]> {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
    return Promise.resolve(this.data);
  }

  async save(course: Course): Promise<void> {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });

    this.data.push({ name: course.properties.name });
  }
}
