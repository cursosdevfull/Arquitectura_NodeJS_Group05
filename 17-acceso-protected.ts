class User {
  protected readonly userId: number;
  public readonly username: string;

  constructor(username: string) {
    this.username = username;
    this.userId = new Date().getTime();
  }

  updateId() {
    //this.userId = new Date().getTime()
  }
}

class Developer extends User {
  update() {
    return `Developer Id: ${this.userId} updated`;
  }
}

class DeveloperCloud extends Developer {
  delete() {
    return `Developer Id: ${this.userId} deleted`;
  }
}

//const user = new User("jolivo")
//console.log(user.userId)

const developer = new Developer("jolivo");
console.log(developer.update());
//console.log(developer.userId)
const developerCloud = new DeveloperCloud("areyes");
console.log(developerCloud.delete());
