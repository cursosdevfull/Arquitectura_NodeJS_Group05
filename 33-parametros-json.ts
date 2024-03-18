type MedicProperties = {
  name: string;
  lastname: string;
  cmp: string;
  phone: string;
  email: string;
  specialty: string;
  subSpecialty: string;
};

class Medic {
  private name: string;
  private lastname: string;
  private cmp: string;
  private phone: string;
  private email: string;
  private specialty: string;
  private subSpecialty: string;

  constructor(props: MedicProperties) {
    this.name = props.name;
    this.lastname = props.lastname;
    this.cmp = props.cmp;
    this.phone = props.phone;
    this.email = props.email;
    this.specialty = props.specialty;
    this.subSpecialty = props.subSpecialty;
  }
}

const props: MedicProperties = {
  lastname: "Diego",
  name: "Pinchi",
  cmp: "777777",
  phone: "99993333",
  email: "carolina@email.com",
  specialty: "Geriatría",
  subSpecialty: "Geriatría cardiáca",
};
const medic = new Medic(props);
console.log(medic);
