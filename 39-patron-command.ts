interface IAppointmentPeru {
  patientName: string;
  patientLastname: string;
  date: Date;
  medicId: number;
  specialtyId: number;
}

interface IAppointmentChile {
  patientFullname: string;
  date: Date;
  medicId: number;
  specialtyId: number;
  centerId: number;
}

interface IAppointmentMexico {
  patientName: string;
  patientLastname: string;
  date: Date;
  medicId: number;
  specialtyId: number;
  insuranceId: number;
  centerId: number;
}

interface IPayload<IAppointment> {
  payload: IAppointment;
}

abstract class Command<IAppointment> {
  target: string;
  message: IPayload<IAppointment>;

  execute() {
    console.log(
      `Target: ${this.target} - Message: ${JSON.stringify(this.message)}`
    );
  }
}

class AppointmentPeru extends Command<IAppointmentPeru> {
  target = "AppointmentPeru";
  message: { payload: IAppointmentPeru };

  constructor(appointment: IAppointmentPeru) {
    super();
    this.message = { payload: appointment };
  }
}

class AppointmentChile extends Command<IAppointmentChile> {
  target = "IAppointmentChile";
  message: { payload: IAppointmentChile };

  constructor(appointment: IAppointmentChile) {
    super();
    this.message = { payload: appointment };
  }
}

class AppointmentMexico extends Command<IAppointmentMexico> {
  target = "IAppointmentMexico";
  message: { payload: IAppointmentMexico };

  constructor(appointment: IAppointmentMexico) {
    super();
    this.message = { payload: appointment };
  }
}

const targets: Array<
  Command<IAppointmentPeru | IAppointmentChile | IAppointmentMexico>
> = [
  new AppointmentPeru({
    patientName: "Katia",
    patientLastname: "Guiulfo",
    date: new Date(),
    medicId: 10,
    specialtyId: 20,
  }),
  new AppointmentChile({
    patientFullname: "Julio Salas",
    date: new Date(),
    medicId: 24,
    specialtyId: 54,
    centerId: 4,
  }),
  new AppointmentMexico({
    patientName: "Jorge",
    patientLastname: "Alvarez",
    date: new Date(),
    medicId: 34,
    specialtyId: 10,
    insuranceId: 3455,
    centerId: 4,
  }),
];

targets.forEach(
  (item: Command<IAppointmentPeru | IAppointmentChile | IAppointmentMexico>) =>
    item.execute()
);
