import { DataSource } from 'typeorm';

import { ProductEntity } from '../product/infrastructure/entities/produc.entity';
import { ProductNoSQLEntity } from '../product/infrastructure/entities/product-nosql.entity';
import { StockEntity } from '../stock/infrastructure/entities/stock.entity';

export const providersDatabase = [
  {
    provide: 'DATABASE_SQL',
    useFactory: async () => {
      const datasource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'user',
        password: 'test',
        database: 'curso',
        entities: [ProductEntity, StockEntity],
        synchronize: true,
        logging: false,
      });

      return datasource.initialize();
    },
  },
  {
    provide: 'DATABASE_NOSQL',
    useFactory: async () => {
      const datasource = new DataSource({
        type: 'mongodb',
        url: 'mongodb://user:test@localhost:27017',
        database: 'curso',
        authSource: 'admin',
        entities: [ProductNoSQLEntity],
        synchronize: true,
        logging: false,
        useNewUrlParser: true,
      });

      return datasource.initialize();
    },
  },
];
