import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';

import { RoleEntity } from '../../../role/infrastructure/entities/role.entity';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  lastname: string;

  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  refreshToken: string;

  @ManyToMany(() => RoleEntity, (role) => role.users)
  @JoinTable()
  roles: RoleEntity[];
}
