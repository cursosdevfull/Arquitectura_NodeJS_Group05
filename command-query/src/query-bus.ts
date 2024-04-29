import { IQueryHandler } from "./query/query-handler.interface";

export class QueryBus {
  private readonly handlers: IQueryHandler<any>[] = [];

  registerHandler(handler: IQueryHandler<any>): void {
    this.handlers.push(handler);
  }

  execute(query: any) {
    const handler = this.handlers.find((el) => el.isHandle(query));

    if (handler) return handler.execute(query);
  }
}
