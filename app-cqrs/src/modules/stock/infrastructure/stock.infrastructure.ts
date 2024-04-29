import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { StockRepository } from '../domain/repositories/stock.repository';
import { Stock, StockProperties } from '../domain/stock';
import { StockEntity } from './entities/stock.entity';

@Injectable()
export class StockInfrastructure implements StockRepository {
  constructor(
    @Inject('STOCK_REPOSITORY')
    private readonly repository: Repository<StockEntity>,
  ) {}

  async save(stock: Stock): Promise<void> {
    const entity = new StockEntity();
    entity.stockId = stock.properties.stockId;
    entity.productId = stock.properties.productId;
    entity.quantity = stock.properties.quantity;
    await this.repository.save(entity);
    return;
  }
  async find(stockId: number): Promise<Stock> {
    const entity = await this.repository.findOne({ where: { stockId } });
    if (!entity) return null;

    const props: StockProperties = {
      stockId,
      productId: entity.productId,
      quantity: entity.quantity,
    };
    return new Stock(props);
  }
}
