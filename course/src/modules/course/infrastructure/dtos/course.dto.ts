import { Course, CourseProperties } from '../../domain/course';
import { CourseEntity } from '../entities/course.entity';

export class CourseDto {
  static fromDomainToData(course: Course): CourseEntity {
    const courseEntity = new CourseEntity();
    courseEntity.courseId = course.properties.courseId;
    courseEntity.title = course.properties.title;
    courseEntity.createdAt = course.properties.createdAt;
    courseEntity.updatedAt = course.properties.updatedAt;
    courseEntity.deletedAt = course.properties.deletedAt;

    return courseEntity;
  }

  static fromDataToDomain(
    data: CourseEntity | CourseEntity[],
  ): Course | Course[] {
    if (Array.isArray(data)) {
      return data.map((course) => this.fromDataToDomain(course)) as Course[];
    }

    const courseProperties: CourseProperties = {
      courseId: data.courseId,
      title: data.title,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      deletedAt: data.deletedAt,
    };

    return new Course(courseProperties);
  }
}
