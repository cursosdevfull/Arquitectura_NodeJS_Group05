import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Product } from '../domain/product';
import { ProductNoSqlRepository } from '../domain/repositories/product-nosql.repository';
import { ProductNoSQLEntity } from './entities/product-nosql.entity';

@Injectable()
export class ProductNoSqlInfrastructure implements ProductNoSqlRepository {
  constructor(
    @Inject('PRODUCT_NOSQL_REPOSITORY')
    private repository: Repository<ProductNoSQLEntity>,
  ) {}

  async save(product: Product): Promise<void> {
    const entity = new ProductNoSQLEntity();
    entity.name = product.properties.name;
    entity.price = product.properties.price;
    entity.stock = product.properties.stock;
    entity.createdAt = product.properties.createdAt;
    entity.updatedAt = product.properties.updatedAt;
    entity.deletedAt = product.properties.deletedAt;

    await this.repository.save(entity);
    return;
  }

  async list(): Promise<Product[]> {
    const entities = await this.repository.find({ where: { deletedAt: null } });
    console.log(entities);
    return entities.map((entity) => {
      return new Product({
        name: entity.name,
        price: entity.price,
        stock: entity.stock,
        createdAt: entity.createdAt,
        updatedAt: entity.updatedAt,
        deletedAt: entity.deletedAt,
      });
    });
  }
}
