import { Product } from '../product';

export interface ProductNoSqlRepository {
  save(product: Product): Promise<void>;
  list(): Promise<Product[]>;
}
