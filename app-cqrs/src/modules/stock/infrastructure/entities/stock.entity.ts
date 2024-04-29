import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'stock' })
export class StockEntity {
  @PrimaryGeneratedColumn()
  stockId: number;

  @Column({ type: 'int', nullable: false })
  productId: number;

  @Column({ type: 'int', nullable: false })
  quantity: number;
}
