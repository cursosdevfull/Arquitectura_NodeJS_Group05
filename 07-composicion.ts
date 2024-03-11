class UserInformationPersonal {
  userId: number;
  name: string;
  lastname: string;
  gender: string;
  age: number;

  constructor(name: string, lastname: string, gender: string, age: number) {
    this.userId = new Date().getTime();
    this.name = name;
    this.lastname = lastname;
    this.gender = gender;
    this.age = age;
  }
}

class UserSalary {
  userSalary: number;
  userInformationPersonal: UserInformationPersonal;

  constructor(
    name: string,
    lastname: string,
    gender: string,
    age: number,
    userSalary: number
  ) {
    this.userInformationPersonal = new UserInformationPersonal(
      name,
      lastname,
      gender,
      age
    );
    this.userSalary = userSalary;
  }
}

const obj = new UserSalary("Miranda", "Zapata", "female", 34, 3000);
console.log(obj);
