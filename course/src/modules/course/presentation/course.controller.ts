import { BadRequestException, Body, Controller, Get, InternalServerErrorException, Post } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CourseApplication } from '../application/course.application';
import { CourseProperties } from '../domain/course';
import { CourseFactory } from '../domain/course-factory';
import { CourseInsertDto } from './dtos/course-insert.dto';

@Controller('course')
export class CourseController {
  constructor(private readonly courseApplication: CourseApplication) {}

  @Get()
  async getAll() {
    const courseGetAllResult = await this.courseApplication.getAllCourses();
    if (courseGetAllResult.isErr()) {
      return new InternalServerErrorException(courseGetAllResult.error.message);
    }
    return courseGetAllResult.value;
  }

  @Post()
  async insert(@Body() inputBody: CourseInsertDto) {
    const { title } = inputBody;

    const props: CourseProperties = {
      courseId: uuidv4(),
      title,
    };

    const courseResult = CourseFactory.create(props);
    if (courseResult.isErr()) {
      return new BadRequestException(courseResult.error.message);
    }

    const courseSaveResult = await this.courseApplication.saveCourse(
      courseResult.value,
    );
    if (courseSaveResult.isErr()) {
      return new InternalServerErrorException(courseSaveResult.error.message);
    }
    return { message: 'Course created successfully' };
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
