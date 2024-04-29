import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/product/presentation/product.module';
import { StockModule } from './modules/stock/presentation/stock.module';

@Module({
  imports: [CqrsModule, ProductModule, StockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
