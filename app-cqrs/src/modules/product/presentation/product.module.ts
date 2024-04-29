import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { DatabaseModule } from 'src/modules/database/database.module';

import { InsertCommandHandler } from '../application/command/insert.command';
import { ListQueryHandler } from '../application/query/list.query';
import { ProductNoSqlInfrastructure } from '../infrastructure/product-nosql.infrastructure';
import { ProductInfrastructure } from '../infrastructure/product.infrastructure';
import { providersProduct } from '../infrastructure/providers/product.providers';
import { ProductController } from './product.controller';

const application = [InsertCommandHandler, ListQueryHandler];
const infrastructure = [ProductInfrastructure, ProductNoSqlInfrastructure];

@Module({
  imports: [DatabaseModule, CqrsModule],
  controllers: [ProductController],
  providers: [...providersProduct, ...application, ...infrastructure],
})
export class ProductModule {}
