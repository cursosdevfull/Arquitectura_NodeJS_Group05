import { Inject, Injectable } from '@nestjs/common';

import { Course } from '../domain/course';
import { CourseRepository } from '../domain/repositories/course.repository';
import { CourseGetAllResult, CourseSaveResult } from '../infrastructure/course.infrastructure';

@Injectable()
export class CourseApplication {
  constructor(
    @Inject('CourseRepository')
    private readonly repository: CourseRepository,
  ) {}

  async getAllCourses(): Promise<CourseGetAllResult> {
    return await this.repository.getAllCourses();
  }

  async saveCourse(course: Course): Promise<CourseSaveResult> {
    return await this.repository.save(course);
  }
}
