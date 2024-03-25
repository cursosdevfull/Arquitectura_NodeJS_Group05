// Modelo de dominio
class Medic {
  id: number;
  specialtyId: number;
  subSpecialtyId: number;
  patientId: number;

  constructor(
    id: number,
    specialtyId: number,
    subSpecialtyId: number,
    patientId: number
  ) {
    this.id = id;
    this.specialtyId = specialtyId;
    this.subSpecialtyId = subSpecialtyId;
  }
}

class Schedule {
  centerId: number;
  date: Date;
  patientId: number;

  constructor(centerId: number, date: Date, patientId: number) {
    this.centerId = centerId;
    this.date = date;
    this.patientId = patientId;
  }
}

class ModelDomainAppointment {
  private availabilityId: string;
  private medic: Medic;
  private schedule: Schedule;
  private readonly createdAt: Date;
  private updatedAt: Date | undefined;
  private deletedAt: Date | undefined;

  constructor(
    availabilityId: string,
    medicId: number,
    specialtyId: number,
    subSpecialtyId: number,
    centerId: number,
    date: Date,
    patientId: number
  ) {
    if (date < new Date())
      throw new Error("Date must be greater than the current date");
    if (date.getDay() === 0) throw new Error("Day invalid");
    if (date.getHours() > 20) throw new Error("Date wrong");

    if (medicId < 1) throw new Error("MedicId must be greater than zero");
    if (specialtyId < 1)
      throw new Error("specialtyId must be greater than zero");
    if (subSpecialtyId < 1)
      throw new Error("subSpecialtyId must be greater than zero");
    if (centerId < 1) throw new Error("CenterId must be greater than zero");

    if (
      !availabilityId.match(
        /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/
      )
    )
      throw new Error("AvailabilityId must be a UUID");

    this.availabilityId = availabilityId;
    this.medic = new Medic(medicId, specialtyId, subSpecialtyId, patientId);
    this.schedule = new Schedule(centerId, date, patientId);
    this.createdAt = new Date();
  }

  updateDate(date: Date) {
    if (date < new Date())
      throw new Error("Date must be greater than the current date");
    if (date.getDay() === 0) throw new Error("Day invalid");
    if (date.getHours() > 20) throw new Error("Date wrong");

    this.schedule.date = date;
    this.updatedAt = new Date();
  }

  get properties() {
    return {
      availabilityId: this.availabilityId,
      medic: this.medic,
      schedule: this.schedule,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }
}

const modelDomain = new ModelDomainAppointment(
  "123e4567-e89b-12d3-a456-426655440000",
  10,
  3,
  34,
  4,
  new Date("2024-03-25T15:00:00Z"),
  334
);
console.log(modelDomain.properties);
modelDomain.updateDate(new Date("2024-03-28T20:00:00Z"));
console.log(modelDomain.properties);
