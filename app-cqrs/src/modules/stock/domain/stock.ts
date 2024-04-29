export interface StockEssentials {
  productId: number;
  quantity: number;
}

export interface StockOptionals {
  stockId: number;
}

export type StockProperties = StockEssentials & Partial<StockOptionals>;

export class Stock {
  private readonly stockId: number;
  private productId: number;
  private quantity: number;

  constructor(properties: StockProperties) {
    if (properties.stockId && properties.stockId < 0)
      throw new Error('StockId must be greater than 0');
    if (properties.productId < 0)
      throw new Error('ProductId must be greater than 0');
    if (properties.quantity < 0)
      throw new Error('Quantity must be greater than 0');

    Object.assign(this, properties);
  }

  get properties(): StockProperties {
    return {
      stockId: this.stockId,
      productId: this.productId,
      quantity: this.quantity,
    };
  }

  update() {
    this.quantity += 1;
  }
}
