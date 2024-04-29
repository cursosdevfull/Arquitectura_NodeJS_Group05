import { Stock } from '../stock';

export interface StockRepository {
  save(stock: Stock): Promise<void>;
  find(stockId: number): Promise<Stock | null>;
}
