import { DataSource } from 'typeorm';

import { StockEntity } from '../entities/stock.entity';

export const providersStock = [
  {
    provide: 'STOCK_REPOSITORY',
    useFactory: (datasource: DataSource) =>
      datasource.getRepository(StockEntity),
    inject: ['DATABASE_SQL'],
  },
];
