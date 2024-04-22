export class AppService {
  static get DATABASE_HOST(): string {
    return process.env.DATABASE_HOST;
  }

  static get DATABASE_PORT(): number {
    return parseInt(process.env.DATABASE_PORT);
  }

  static get DATABASE_USERNAME(): string {
    return process.env.DATABASE_USERNAME;
  }

  static get DATABASE_PASSWORD(): string {
    return process.env.DATABASE_PASSWORD;
  }

  static get DATABASE_NAME(): string {
    return process.env.DATABASE_NAME;
  }

  static get DATABASE_SYNCHRONIZE(): boolean {
    return process.env.DATABASE_SYNCHRONIZE === 'true';
  }

  static get DATABASE_LOGGING(): boolean {
    return process.env.DATABASE_LOGGING === 'true';
  }
}
