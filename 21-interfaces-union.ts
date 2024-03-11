interface UserPropertiesRequired {
  name: string;
  lastname: string;
}

interface UserPropertiesOptionals {
  email?: string;
  age?: number;
  gender?: string;
}

class User {
  private readonly userId: number;
  private name: string;
  private lastname: string;
  private email: string | undefined;
  private age?: number;
  private gender?: string;
  private readonly createdAt: Date;
  private updatedAt: Date | undefined;
  private deletedAt: Date | undefined;

  constructor(props: UserPropertiesRequired & UserPropertiesOptionals) {
    this.name = props.name;
    this.lastname = props.lastname;
    this.email = props.email;
    this.age = props.age;
    this.gender = props.gender;

    this.userId = new Date().getTime();
    this.createdAt = new Date();
  }
}

const props: UserPropertiesRequired & UserPropertiesOptionals = {
  name: "Arturo",
  lastname: "Zapata",
  gender: "male",
};
const user = new User(props);
console.log(user);
