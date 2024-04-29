import { Controller, Get } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { InsertCommand } from '../application/command/insert.command';
import { ListQuery } from '../application/query/list.query';

@Controller('product')
export class ProductController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async insert() {
    const command = new InsertCommand('Product 1', 100, 10);
    await this.commandBus.execute(command);

    const query = new ListQuery();
    return await this.queryBus.execute(query);
  }
}
