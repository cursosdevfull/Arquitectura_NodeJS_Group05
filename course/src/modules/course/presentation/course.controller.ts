import { Body, Controller, Get, Post } from '@nestjs/common';

import { CourseApplication } from '../application/course.application';
import { Course, CourseProps } from '../domain/course';
import { CourseInsertDto } from './dtos/course-insert.dto';

@Controller('course')
export class CourseController {
  constructor(private readonly courseApplication: CourseApplication) {}

  @Get()
  getAll() {
    return this.courseApplication.getAllCourses();
  }

  @Post()
  insert(@Body() inputBody: CourseInsertDto) {
    const props: CourseProps = {
      name: inputBody['name'],
    };

    const course = new Course(props);

    this.courseApplication.saveCourse(course);
  }
}

/* @Controller('course')
@MiControlador('prefix-course')
export class CourseController {
  constructor(
    @Inject(CourseApplication) private readonly application: CourseApplication,
    @Inject('DEFAULT_OPTIONS_LIBRARY')
    private readonly defaultOptions: { [key: string]: string[] | number },
    @Inject('MI_FACTORIA')
    private readonly miFactoria: { create: () => string },
    @Inject('MI_FACTORIA_2')
    private readonly miFactoria2: { getOptions: () => object },
    @Inject('MI_DATA') private readonly data: any,
  ) {}

  @Get()
  @MiGet('get-all-courses')
  findAll() {
    console.log('Default Options:', this.defaultOptions);
    console.log('Mi Factoria:', this.miFactoria.create());
    console.log('Mi Factoria 2:', this.miFactoria2.getOptions());
    console.log('Data:', this.data.getData());
    return this.application.getAllCourses();
    return [{ name: 'Course 1' }, { name: 'Course 2' }];
  }
} */
