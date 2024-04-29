import { Inject } from '@nestjs/common';
import { IQuery, IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { Product } from '../../domain/product';
import { ProductNoSqlRepository } from '../../domain/repositories/product-nosql.repository';
import { ProductNoSqlInfrastructure } from '../../infrastructure/product-nosql.infrastructure';

export class ListQuery implements IQuery {}

@QueryHandler(ListQuery)
export class ListQueryHandler implements IQueryHandler<ListQuery> {
  constructor(
    @Inject(ProductNoSqlInfrastructure)
    private readonly repositoryNoSQL: ProductNoSqlRepository,
  ) {}

  async execute(query: ListQuery): Promise<Product[]> {
    return await this.repositoryNoSQL.list();
  }
}
