import { ProductListQuery } from "./ProductListQuery";
import { IQueryHandler } from "./query-handler.interface";

export class ProductListQueryHandler
  implements IQueryHandler<ProductListQuery>
{
  data = [
    { id: 1, title: "Product 1", price: 100, categoryId: 1 },
    { id: 2, title: "Product 2", price: 200, categoryId: 2 },
    { id: 3, title: "Product 3", price: 300, categoryId: 3 },
    { id: 4, title: "Product 4", price: 400, categoryId: 1 },
    { id: 5, title: "Product 5", price: 500, categoryId: 1 },
    { id: 6, title: "Product 6", price: 600, categoryId: 1 },
    { id: 7, title: "Product 7", price: 700, categoryId: 2 },
    { id: 8, title: "Product 8", price: 800, categoryId: 2 },
    { id: 9, title: "Product 9", price: 900, categoryId: 2 },
    { id: 10, title: "Product 10", price: 1000, categoryId: 3 },
    { id: 11, title: "Product 11", price: 1100, categoryId: 3 },
    { id: 12, title: "Product 12", price: 1200, categoryId: 3 },
    { id: 13, title: "Product 13", price: 1300, categoryId: 3 },
    { id: 14, title: "Product 14", price: 1400, categoryId: 3 },
  ];

  isHandle(query: any): boolean {
    return query instanceof ProductListQuery;
  }

  execute(query: ProductListQuery) {
    let result = this.data.filter((el) => el.categoryId === query.categoryId);

    if (query.orderByTitle) {
      result = result.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
    }

    return result.slice(
      query.page * query.pageSize,
      query.page * query.pageSize + query.pageSize
    );
  }
}
