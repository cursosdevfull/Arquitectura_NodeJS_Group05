export interface IQueryHandler<Query> {
  isHandle(query: any): boolean;
  execute(query: Query): any;
}
