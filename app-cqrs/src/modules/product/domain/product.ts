export interface ProductEssentials {
  name: string;
  price: number;
  stock: number;
}

export interface ProductOptionals {
  productId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export type ProductProperties = ProductEssentials & Partial<ProductOptionals>;
export type ProductFieldsUpdate = Partial<ProductEssentials>;

export class Product {
  private readonly productId: number;
  private name: string;
  private price: number;
  private stock: number;
  private readonly createdAt: Date;
  private updatedAt: Date | undefined;
  private deletedAt: Date | undefined;

  constructor(props: ProductProperties) {
    if (props.price < 0) throw new Error('Price must be greater than 0');
    if (props.stock < 0) throw new Error('Stock must be greater than 0');
    if (props.name.length < 3)
      throw new Error('Name must be at least 3 characters long');

    Object.assign(this, props);
    if (!this.createdAt) this.createdAt = new Date();
  }

  get properties() {
    return {
      productId: this.productId,
      name: this.name,
      price: this.price,
      stock: this.stock,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }

  update(fields: ProductFieldsUpdate) {
    Object.assign(this, fields);
    this.updatedAt = new Date();
  }

  delete() {
    this.deletedAt = new Date();
  }
}
