class Database {
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

class User {
  private readonly userId: number;
  private name: string;
  private lastname: string;
  private age: number;
  private readonly createdAt: Date;
  private updatedAt: Date | undefined;
  private deletedAt: Date | undefined;
  private connection: { create(): string; update(): string; delete(): string };
  private database: Database;

  constructor(name: string, lastname: string, age: number, database: Database) {
    this.userId = new Date().getTime();
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.createdAt = new Date();
    this.database = database;

    this.connection = this.database.getConnectionDatabase(
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
}

const database = new Database();
const user = new User("Lucía", "Zapata", 23, database);
