import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../database/database.module';
import { providersStock } from '../infrastructure/providers/stock.providers';
import { StockInfrastructure } from '../infrastructure/stock.infrastructure';
import { StockController } from './stock.controller';

const infrastructure = [StockInfrastructure];

@Module({
  imports: [DatabaseModule],
  controllers: [StockController],
  providers: [...providersStock, ...infrastructure],
})
export class StockModule {}
