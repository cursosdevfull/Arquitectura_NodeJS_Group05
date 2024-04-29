import { Product } from '../product';

export interface ProductRepository {
  save(product: Product): Promise<void>;
  findById(productId: number): Promise<Product | undefined>;
  findByName(name: string): Promise<Product | undefined>;
  findAll(): Promise<Product[]>;
}
