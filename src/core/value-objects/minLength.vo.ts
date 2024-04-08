import { err, ok, Result } from "neverthrow";

import { BaseVO } from "./base.vo";

export type ResultCreate = Result<MinLengthVO, Error>;

export class MinLengthVO extends BaseVO<string> {
  private constructor(value: string) {
    super(value);
  }

  static create(
    value: string,
    minLength: number,
    errorMessage: string = "It must meet the minimum length requirement"
  ): ResultCreate {
    if (value.length < minLength) return err(new Error(errorMessage));
    return ok(new MinLengthVO(value));
  }
}
