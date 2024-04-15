import 'reflect-metadata';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(3000, () =>
    console.log('Server is running on http://localhost:3000'),
  );

  /*const attaches = (controllers: any[]) => {
    controllers.forEach((controller) => {
      const prefix = Reflect.getMetadata('prefijo', controller.class);
      const routes = Reflect.getMetadata('rutas', controller.class);
      console.log('prefix', prefix);
      console.log('routes', routes);
    });
  };

  attaches([CourseController]);*/
}
bootstrap();
