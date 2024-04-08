import { validate } from 'uuid';

import { BaseVO } from './base.vo';

export class UuidVO extends BaseVO<string> {
  private constructor(value: string) {
    super(value);
  }

  static create(value: string, errorMessage: string = "Invalid UUID") {
    if (!validate(value)) throw new Error(errorMessage);
    return new UuidVO(value);
  }
}
