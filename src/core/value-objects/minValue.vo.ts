import { BaseVO } from './base.vo';

export class MinValueVO extends BaseVO<number> {
  private constructor(value: number) {
    super(value);
  }

  static create(
    value: number,
    min: number,
    errorMessage: string = "It must meet the minimum value requirement"
  ) {
    if (value < min) throw new Error(errorMessage);
    return new MinValueVO(value);
  }
}
