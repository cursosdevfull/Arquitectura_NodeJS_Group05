import { Role } from './entities/role';

export interface UserEssentials {
  readonly name: string;
  readonly lastname: string;
  readonly email: string;
  readonly password: string;
  readonly roles: Role[];
}

export interface UserOptionals {
  readonly id: string;
  readonly refreshToken: string;
}

export type UserProperties = UserEssentials & Partial<UserOptionals>;

export class User {
  private readonly id: string;
  private readonly name: string;
  private readonly lastname: string;
  private readonly email: string;
  private readonly password: string;
  private readonly roles: Role[];
  private readonly refreshToken: string;

  constructor(props: UserProperties) {
    Object.assign(this, props);
  }

  get properties() {
    return {
      id: this.id,
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      roles: this.roles,
      refreshToken: this.refreshToken,
    };
  }
}
