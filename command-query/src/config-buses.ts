import { QueryBus } from "./query-bus";
import { ProductListQueryHandler } from "./query/ProductListQueryHandler";

const queryBus: QueryBus = new QueryBus();
queryBus.registerHandler(new ProductListQueryHandler());

export { queryBus };
