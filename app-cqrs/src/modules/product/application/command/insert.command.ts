import { Inject } from '@nestjs/common';
import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';

import { Product } from '../../domain/product';
import { ProductNoSqlRepository } from '../../domain/repositories/product-nosql.repository';
import { ProductRepository } from '../../domain/repositories/product.repository';
import { ProductNoSqlInfrastructure } from '../../infrastructure/product-nosql.infrastructure';
import { ProductInfrastructure } from '../../infrastructure/product.infrastructure';

export class InsertCommand implements ICommand {
  constructor(
    public readonly name: string,
    public readonly price: number,
    public readonly stock: number,
  ) {}
}

@CommandHandler(InsertCommand)
export class InsertCommandHandler implements ICommandHandler<InsertCommand> {
  constructor(
    @Inject(ProductInfrastructure)
    private readonly repository: ProductRepository,
    @Inject(ProductNoSqlInfrastructure)
    private readonly repositoryNoSQL: ProductNoSqlRepository,
  ) {}

  async execute(command: InsertCommand): Promise<any> {
    const { name, price, stock } = command;
    const product = new Product({ name, price, stock });
    await this.repository.save(product);
    await this.repositoryNoSQL.save(product);
  }
}
