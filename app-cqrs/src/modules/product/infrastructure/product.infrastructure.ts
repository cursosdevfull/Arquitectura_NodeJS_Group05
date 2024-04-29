import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Product } from '../domain/product';
import { ProductRepository } from '../domain/repositories/product.repository';
import { ProductEntity } from './entities/produc.entity';

@Injectable()
export class ProductInfrastructure implements ProductRepository {
  constructor(
    @Inject('PRODUCT_REPOSITORY') private repository: Repository<ProductEntity>,
  ) {}

  async save(product: Product): Promise<void> {
    const entity = new ProductEntity();
    entity.name = product.properties.name;
    entity.price = product.properties.price;
    entity.stock = product.properties.stock;
    entity.createdAt = product.properties.createdAt;
    entity.updatedAt = product.properties.updatedAt;
    entity.deletedAt = product.properties.deletedAt;

    await this.repository.save(entity);
  }
  findById(productId: number): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  findByName(name: string): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
}
