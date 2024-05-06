import { RoleEntity } from 'src/modules/role/infrastructure/entities/role.entity';

import { Role } from '../../domain/entities/role';
import { User } from '../../domain/user';
import { UserEntity } from '../entities/user.entity';

export class UserDto {
  static fromDomainToData(user: User): UserEntity {
    const userEntity = new UserEntity();
    userEntity.id = user.properties.id;
    userEntity.name = user.properties.name;
    userEntity.lastname = user.properties.lastname;
    userEntity.email = user.properties.email;
    userEntity.password = user.properties.password;
    userEntity.refreshToken = user.properties.refreshToken;
    userEntity.roles = user.properties.roles.map((role: Role) => {
      const roleEntity = new RoleEntity();
      roleEntity.id = role.id;
      roleEntity.name = role.name;
      return roleEntity;
    });
    return userEntity;
  }

  static fromDataToDomain(userEntity: UserEntity): User {
    const user = new User({
      id: userEntity.id,
      name: userEntity.name,
      lastname: userEntity.lastname,
      email: userEntity.email,
      password: userEntity.password,
      refreshToken: userEntity.refreshToken,
      roles: userEntity.roles.map(
        (role: RoleEntity) => new Role(role.id, role.name),
      ),
    });
    return user;
  }
}
