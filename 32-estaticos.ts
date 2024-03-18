class Database {
  static protocol: "http" | "https" = "http";

  static getConnectionString(
    host: string,
    username: string,
    password: string,
    schema: string
  ) {
    return `${this.protocol}://${host}/${username}:${password}/${schema}`;
  }

  getProtocol() {
    return Database.protocol;
  }
}

/*const database = new Database()
console.log(database.getConnectionString("localhost", "userxyz", "nivelDios", "marketing"))
const connectionString = new Database().getConnectionString("localhost", "userxyz", "nivelDios", "marketing")
console.log(connectionString)*/

const connectionString = Database.getConnectionString(
  "localhost",
  "userxyz",
  "nivelDios",
  "marketing"
);

const database = new Database();
console.log("protocol", database.getProtocol());
