class User {
  private readonly userId: number;
  private name: string;
  private lastname: string;
  private age: number;
  private readonly createdAt: Date;
  private updatedAt: Date | undefined;
  private deletedAt: Date | undefined;
  //private connection: {create: () => string, update: () => string, delete: ()=>string}
  private connection: { create(): string; update(): string; delete(): string };

  constructor(name: string, lastname: string, age: number) {
    this.userId = new Date().getTime();
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.createdAt = new Date();
    this.connection = this.getConnectionDatabase(
      "localhost",
      3306,
      "user01",
      "dios",
      "products"
    );
  }

  create() {
    this.connection.create();
  }

  update(age: number) {
    this.age = age;
    this.updatedAt = new Date();
    this.connection.update();
  }

  delete() {
    this.deletedAt = new Date();
    this.connection.delete();
  }

  getConnectionDatabase(
    host: string,
    port: number,
    username: string,
    password: string,
    schema: string
  ) {
    return {
      create: () => "user created",
      update: () => "user updated",
      delete: () => "user deleted",
    };
  }
}
