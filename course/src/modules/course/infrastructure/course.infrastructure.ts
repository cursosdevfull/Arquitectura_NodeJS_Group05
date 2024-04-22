import { Inject } from '@nestjs/common';
import { err, ok, Result } from 'neverthrow';
import { IsNull, Repository } from 'typeorm';

import { DatabaseException } from '../../core/exceptions/database.exception';
import { Course } from '../domain/course';
import { CourseRepository } from '../domain/repositories/course.repository';
import { CourseDto } from './dtos/course.dto';
import { CourseEntity } from './entities/course.entity';

export type CourseSaveResult = Result<Course, DatabaseException>;
export type CourseGetAllResult = Result<Course[], DatabaseException>;

export class CourseInfrastructure implements CourseRepository {
  constructor(
    @Inject('COURSE_REPOSITORY')
    private readonly repository: Repository<CourseEntity>,
  ) {}

  async getAllCourses(): Promise<CourseGetAllResult> {
    try {
      const courseEntities = await this.repository.find({
        where: { deletedAt: IsNull() },
      });
      return ok(
        courseEntities.map((course) =>
          CourseDto.fromDataToDomain(course),
        ) as Course[],
      );
    } catch (error) {
      return err(new DatabaseException(error.message));
    }
  }

  async save(course: Course): Promise<CourseSaveResult> {
    try {
      const courseEntity = CourseDto.fromDomainToData(course);
      await this.repository.save(courseEntity);

      return ok(course);
    } catch (error) {
      return err(new DatabaseException(error.message));
    }
  }
}
