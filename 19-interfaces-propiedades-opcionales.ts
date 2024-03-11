interface UserProps {
  name?: string;
  lastname?: string;
  email?: string;
  age?: number;
  gender: string;
}

class User {
  private readonly userId: number;
  private name: string | undefined;
  private lastname: string | undefined;
  private email: string | undefined;
  private age?: number;
  private gender: string;
  private readonly createdAt: Date;
  private updatedAt: Date | undefined;
  private deletedAt: Date | undefined;

  constructor(props: UserProps) {
    this.name = props.name;
    this.lastname = props.lastname;
    this.email = props.email;
    this.age = props.age;
    this.gender = props.gender;

    this.userId = new Date().getTime();
    this.createdAt = new Date();
  }
}

//const props: UserProps = { name: "Arturo", lastname: "Petrov", email: "apetrov@email.com", age: 23, gender: "male" }
const props: UserProps = { name: "Arturo", gender: "male" };
const user = new User(props);
