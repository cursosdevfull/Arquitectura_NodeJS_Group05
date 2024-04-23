import { AppointmentCommand } from './AppointmentCommand';
import { ICommandHandler } from './command-handler.interface';

export class AppointmentCommandHandler
  implements ICommandHandler<AppointmentCommand>
{
  handle(command: AppointmentCommand): void {
    console.log(
      `Handling command: ${command.constructor.name} ${command.appointmentId} ${command.patientId} ${command.doctorId} ${command.date}`
    );
  }
  canHandle(command: any): boolean {
    return command instanceof AppointmentCommand;
  }
}
