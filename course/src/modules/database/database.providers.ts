import { DataSource } from 'typeorm';

import { AppService } from '../../app.service';
import { CourseEntity } from '../course/infrastructure/entities/course.entity';
import { RoleEntity } from '../role/infrastructure/entities/role.entity';
import { UserEntity } from '../user/infrastructure/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: AppService.DATABASE_HOST,
        port: AppService.DATABASE_PORT,
        username: AppService.DATABASE_USERNAME,
        password: AppService.DATABASE_PASSWORD,
        database: AppService.DATABASE_NAME,
        entities: [CourseEntity, UserEntity, RoleEntity],
        synchronize: AppService.DATABASE_SYNCHRONIZE,
        logging: AppService.DATABASE_LOGGING,
      });

      return dataSource.initialize();
    },
  },
];
