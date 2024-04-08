import { BaseVO } from './base.vo';

export class MinArrayVO extends BaseVO<Array<any>> {
  private constructor(value: Array<any>) {
    super(value);
  }

  static create(
    value: Array<any>,
    errorMessage: string = "It must have at least one item"
  ) {
    if (value.length < 1) throw new Error(errorMessage);
    return new MinArrayVO(value);
  }
}
