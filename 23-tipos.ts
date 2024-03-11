type Gender = "male" | "female";
type DateOptional = Date | undefined;

interface UserPropertiesRequired {
  name: string;
  lastname: string;
}

interface UserPropertiesOptionals {
  email: string;
  age: number;
  gender: Gender;
}

type UserProperties = UserPropertiesRequired & Partial<UserPropertiesOptionals>;

class User {
  private readonly userId: number;
  private name: string;
  private lastname: string;
  private email: string | undefined;
  private age?: number;
  private gender?: Gender;
  private readonly createdAt: Date;
  private updatedAt: DateOptional;
  private deletedAt: DateOptional;

  constructor(props: UserProperties) {
    this.name = props.name;
    this.lastname = props.lastname;
    this.email = props.email;
    this.age = props.age;
    this.gender = props.gender;

    this.userId = new Date().getTime();
    this.createdAt = new Date();
  }
}

const props: UserProperties = {
  name: "Arturo",
  lastname: "Zapata",
  gender: "male",
};
const user = new User(props);
console.log(user);
