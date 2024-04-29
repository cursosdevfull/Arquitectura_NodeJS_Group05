import { Module } from '@nestjs/common';

import { providersDatabase } from './database.providers';

@Module({
  providers: [...providersDatabase],
  exports: [...providersDatabase],
})
export class DatabaseModule {}
