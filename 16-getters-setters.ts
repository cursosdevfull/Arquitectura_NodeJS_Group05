class UserSalary {
  private readonly userId: number;
  private salary: number;

  constructor(userId: number, salary: number) {
    this.userId = userId;
    this.salary = salary;
  }

  set valueSalary(salary: number) {
    this.salary = salary;
  }

  get valueSalary() {
    return this.salary;
  }
}

const userSalary = new UserSalary(10, 1000);
console.log(userSalary.valueSalary);
userSalary.valueSalary = 2000;
console.log(userSalary.valueSalary);
