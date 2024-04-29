import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'product', database: 'curso' })
export class ProductNoSQLEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  deletedAt: Date;
}
