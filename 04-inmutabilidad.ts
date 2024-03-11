class User {
  private readonly userId: number;
  private name: string;
  private readonly email: string;
  private password: string;
  private age: number;
  private readonly createdAt: Date;
  private updatedAt: Date | undefined;
  private deletedAt?: Date;

  constructor(name: string, email: string, password: string, age: number) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
    this.userId = new Date().getTime();
    this.createdAt = new Date();
  }

  properties() {
    // this.userId = 4309494

    return {
      userId: this.userId,
      name: this.name,
      email: this.email,
      password: this.password,
      age: this.age,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }
}

const user = new User(
  "Antonia",
  "antonia@email.com",
  "TZ2saovFM0vP4ZbreDdcsrMo2H",
  23
);
// user.userId = 10
