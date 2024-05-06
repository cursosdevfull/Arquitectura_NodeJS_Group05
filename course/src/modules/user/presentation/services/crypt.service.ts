import * as bcrypt from 'bcryptjs';

export class CryptService {
  private static readonly saltRounds = 10;

  static async hash(data: string): Promise<string> {
    return bcrypt.hash(data, this.saltRounds);
  }

  static async compare(data: string, encrypted: string): Promise<boolean> {
    return bcrypt.compare(data, encrypted);
  }
}
