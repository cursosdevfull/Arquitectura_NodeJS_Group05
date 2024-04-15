import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './modules/course/presentation/course.module';

@Module({
  imports: [CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
