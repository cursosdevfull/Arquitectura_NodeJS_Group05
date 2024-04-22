import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../database/database.module';
import { CourseApplication } from '../application/course.application';
import { CourseInfrastructure } from '../infrastructure/course.infrastructure';
import { courseProviders } from '../infrastructure/entities/course.provider';
import { CourseController } from './course.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CourseController],
  providers: [
    CourseApplication,
    { provide: 'CourseRepository', useClass: CourseInfrastructure },
    ...courseProviders,
  ],
})
export class CourseModule {}

/*
export class FakeCourseApplication {
  getAllCourses() {
    return [
      { name: 'Fake Course 1' },
      { name: 'Fake Course 2' },
      { name: 'Fake Course 3' },
    ];
  }
}



export class MiData {
  constructor(private data: any) {}

  async initialize() {
    const returned = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this);
      }, 1000);
    });
    return returned;
  }

  getData() {
    return this.data;
  }
}

export const DefaultOptions = {
  fileTypesAllowed: ['image/jpeg'],
  fileSizeLimit: 1 * 1024 * 1024,
};

*/

/*
  const DEFAULT_OPTIONS = {fileTypesAllowed: ['image/jpeg', 'image/png', 'image/gif'], fileSizeLimit: 2 * 1024 * 1024};

  {
    provide: 'DEFAULT_OPTIONS_LIBRARY',
    useValue: DEFAULT_OPTIONS,
  }

*/

/*{
      provide: CourseApplication,
      useClass: CourseApplication,
    },*/
//CourseApplication,
/* {
      provide: CourseApplication,
      useClass: FakeCourseApplication,
    },
    {
      provide: 'DEFAULT_OPTIONS_LIBRARY',
      useValue: DefaultOptions,
    },
    {
      provide: 'MI_FACTORIA',
      useFactory: () => {
        return {
          create: () => {
            return 'Hola';
          },
        };
      },
    },
    {
      provide: 'MI_FACTORIA_2',
      useFactory: (options) => {
        return {
          getOptions: () => {
            return options;
          },
        };
      },
      inject: ['DEFAULT_OPTIONS_LIBRARY'],
    },
    {
      provide: 'MI_DATA',
      useFactory: async () => {
        const instance = new MiData({ name: 'Data' });
        return await instance.initialize();
      },
    }, */
