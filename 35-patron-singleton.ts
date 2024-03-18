class Database {
  private host: string;
  private username: string;
  private password: string;

  private static instance: Database;

  private constructor(host: string, username: string, password: string) {
    this.host = host;
    this.username = username;
    this.password = password;
  }

  static create(host: string, username: string, password: string) {
    if (!this.instance) {
      this.instance = new Database(host, username, password);
    }

    return this.instance;
  }
}

const db1 = Database.create("localhost", "user01", "pass01");
const db2 = Database.create("midominio.com", "user02", "pass02");

console.log(db1);
console.log(db2);
