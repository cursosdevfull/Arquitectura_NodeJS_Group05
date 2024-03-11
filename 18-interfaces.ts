interface IUserMethods {
  update(name: string): Date;
  delete(): Date;
  properties(): object;
}

interface IUser {
  userId: number;
}

interface IAudit {
  createdAt: Date;
  updatedAt: Date | undefined;
  deletedAt: Date | undefined;
}

class User implements IUserMethods, IUser, IAudit {
  readonly userId: number;
  private name: string;
  private age: number;
  private email: string;
  createdAt: Date;
  updatedAt: Date | undefined;
  deletedAt: Date | undefined;

  constructor(name: string, age: number, email: string) {
    this.userId = new Date().getTime();
    this.name = name;
    this.age = age;
    this.email = email;
    this.createdAt = new Date();
  }

  update(name: string) {
    this.name = name;
    this.updatedAt = new Date();
    return this.updatedAt;
  }

  delete() {
    this.deletedAt = new Date();
    return this.deletedAt;
  }

  properties() {
    return {
      userId: this.userId,
      name: this.name,
      age: this.age,
      email: this.email,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }
}
