import { Inject, Injectable } from '@nestjs/common';

import { Course } from '../domain/course';
import { CourseRepository } from '../domain/repositories/course.repository';

@Injectable()
export class CourseApplication {
  constructor(
    @Inject('CourseRepository')
    private readonly repository: CourseRepository,
  ) {}

  async getAllCourses(): Promise<any[]> {
    return await this.repository.getAllCourses();
  }

  async saveCourse(course: Course): Promise<void> {
    return await this.repository.save(course);
  }
}
