import { ICommandHandler } from './command/command-handler.interface';

export class CommandBus {
  private readonly handlers: ICommandHandler<any>[] = [];

  registerHandler(handler: ICommandHandler<any>): void {
    this.handlers.push(handler);
  }

  execute(command: any) {
    const handler = this.handlers.find((el) => el.canHandle(command));
    if (handler) {
      handler.handle(command);
    }
  }
}
