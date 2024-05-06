import { UserEntity } from 'src/modules/user/infrastructure/entities/user.entity';
import { Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'role' })
export class RoleEntity {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @ManyToMany(() => UserEntity, (user) => user.roles)
  users: UserEntity[];
}
