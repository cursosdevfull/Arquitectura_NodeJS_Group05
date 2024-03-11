class User {
  name: string;
  lastname: string;
  email: string;
  private password: string;

  constructor() {
    this.name = "Luisa";
    this.lastname = "Carrizales";
    this.email = "luisa.carrizales@correo.com";
    this.password = "eN0PgyI2Mw0uWag7kkSrU";
  }

  getPassword() {
    return this.password;
  }
}

const user = new User();
console.log(user.getPassword());
