import { DataSource } from 'typeorm';

import { ProductEntity } from '../entities/produc.entity';
import { ProductNoSQLEntity } from '../entities/product-nosql.entity';

export const providersProduct = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useFactory: (datasource: DataSource) =>
      datasource.getRepository(ProductEntity),
    inject: ['DATABASE_SQL'],
  },
  {
    provide: 'PRODUCT_NOSQL_REPOSITORY',
    useFactory: (datasource: DataSource) =>
      datasource.getRepository(ProductNoSQLEntity),
    inject: ['DATABASE_NOSQL'],
  },
];
