import { BaseVO } from './base.vo';

export class UrlVO extends BaseVO<string> {
  private constructor(value: string) {
    super(value);
  }

  static create(value: string): UrlVO {
    if (!value.trim()) {
      throw new Error("Url is required");
    }

    if (!/^(http|https):\/\/[^ "]+$/.test(value)) {
      throw new Error("Invalid url");
    }

    return new UrlVO(value);
  }
}
