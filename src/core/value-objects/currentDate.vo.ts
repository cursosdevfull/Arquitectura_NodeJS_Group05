import { BaseVO } from './base.vo';

export class CurrentDateVO extends BaseVO<Date> {
  private constructor(value: Date) {
    super(value);
  }

  static create(
    value: Date,
    errorMessage: string = "The date must be greater than the current date"
  ) {
    if (value < new Date()) throw new Error(errorMessage);
    return new CurrentDateVO(value);
  }
}
