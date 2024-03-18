interface Repository<Entity> {
  insert(entity: Entity): Entity;
}

/*interface UserRepository {
    insert(user: User): User
}

interface ClientRepository {
    insert(client: Client): Client
}*/

class BaseImplement<Entity> {
  insert(entity: Entity) {
    return entity;
  }
}

class ClientImplement
  extends BaseImplement<Client>
  implements Repository<Client> {}

class UserImplement extends BaseImplement<User> implements Repository<User> {
  registerState(user: User) {
    console.log("state saved");
  }

  create(user: User) {
    console.log("user created");
    return user;
  }
}

/*class ClientImplement implements Repository<Client> {
    insert(client: Client): Client {
        console.log("client inserted")
        return client
    }
}*/

/*class UserImplement implements Repository<User> {
    insert(user: User): User {
        this.registerState(user)
        return this.create(user)
    }

    registerState(user: User) {
        console.log("state saved")
    }

    create(user: User) {
        console.log("user created")
        return user
    }
}*/

class ClientLogic {
  repository: Repository<Client>;

  constructor(repository: Repository<Client>) {
    this.repository = repository;
  }

  register(client: Client) {
    return this.repository.insert(client);
  }
}

class UserLogic {
  repository: Repository<User>;

  constructor(repository: Repository<User>) {
    this.repository = repository;
  }

  register(user: User) {
    return this.repository.insert(user);
  }
}

class User {
  name: string;
  lastname: string;
  age: number;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }
}

class Client {
  fullname: string;
  address: string;
  gender: string;

  constructor(fullname: string, address: string, gender: string) {
    this.fullname = fullname;
    this.address = address;
    this.gender = gender;
  }
}

const user = new User("Alfonso", "Zapata", 23);
const repository: Repository<User> = new UserImplement();
const logic = new UserLogic(repository);
console.log(logic.register(user));

const client = new Client("Jimena Suazo", "av. del aire 123", "female");
const repositoryClient: Repository<Client> = new ClientImplement();
const logicClient = new ClientLogic(repositoryClient);
console.log(logicClient.register(client));
