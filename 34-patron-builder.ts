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

class MedicBuilder {
  name: string;
  lastname: string;
  cmp: string;
  phone: string;
  email: string;
  specialty: string;
  subSpecialty: string;

  addName(value: string) {
    this.name = value;
    return this;
  }

  addLastname(value: string) {
    this.lastname = value;
    return this;
  }

  addCmp(value: string) {
    this.cmp = value;
    return this;
  }

  addPhone(value: string) {
    this.phone = value;
    return this;
  }

  addEmail(value: string) {
    this.email = value;
    return this;
  }

  addSpecialty(value: string) {
    this.specialty = value;
    return this;
  }

  addSubSpecialty(value: string) {
    this.subSpecialty = value;
    return this;
  }

  build() {
    return new Medic(this);
  }
}

const builder = new MedicBuilder();
const medic: Medic = builder
  .addName("Juan")
  .addLastname("Mercado")
  .addCmp("1234")
  .addPhone("888-333-444")
  .addEmail("juan.mercado@email.com")
  .addSpecialty("Cardiología")
  .addSubSpecialty("Cardiología geriátrica")
  .build();

console.log(medic);
