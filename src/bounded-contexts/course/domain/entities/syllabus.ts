import { MinLengthVO } from '@value-objects';

export class Syllabus {
  private item: string;

  constructor(item: string) {
    MinLengthVO.create(
      item,
      10,
      "Syllabus item must be at least 10 characters long."
    );

    this.item = item;
  }

  get properties() {
    return {
      item: this.item,
    };
  }
}
