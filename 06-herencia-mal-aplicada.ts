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

/*class UserSalary {
    userId: number
    salary: number

    constructor(userId: number, salary: number){
        this.userId = userId
        this.salary = salary
    }
}*/

class UserSalary extends UserInformationPersonal {
  salary: number;

  constructor(
    name: string,
    lastname: string,
    gender: string,
    age: number,
    salary: number
  ) {
    super(name, lastname, gender, age);
    this.salary = salary;
  }
}

const obj = new UserSalary("Miranda", "Zapata", "female", 34, 3000);
console.log(obj);
