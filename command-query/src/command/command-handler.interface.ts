export interface ICommandHandler<Command> {
  handle(command: Command): void;
  canHandle(command: Command): boolean;
}
