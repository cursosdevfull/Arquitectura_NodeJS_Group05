import { DataSource } from 'typeorm';

import { CourseEntity } from './course.entity';

export const courseProviders = [
  {
    provide: 'COURSE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CourseEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
