export class AppointmentCommand {
  constructor(
    public readonly appointmentId: string,
    public readonly patientId: string,
    public readonly doctorId: string,
    public readonly date: Date
  ) {}
}
