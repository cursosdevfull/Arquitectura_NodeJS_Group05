// Modelo de datos
class ModelDataAppointment {
  availabilityId: string;
  medicId: number;
  specialtyId: number;
  subSpecialtyId: number;
  centerId: number;
  date: Date;
  patientId: number;
}

const modelData = new ModelDataAppointment();
modelData.availabilityId = "734784743fgd";
modelData.medicId = 10;
modelData.specialtyId = 3;
modelData.subSpecialtyId = 34;
modelData.centerId = 4;
modelData.date = new Date("2024-03-25T15:00:00Z");
modelData.patientId = 334;

console.log(modelData);
