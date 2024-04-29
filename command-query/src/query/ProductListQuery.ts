export class ProductListQuery {
  constructor(
    public readonly page: number,
    public readonly pageSize: number,
    public readonly orderByTitle: boolean,
    public readonly categoryId: number
  ) {}
}
