import { MinLengthVO } from '@value-objects';

export class Goal {
  private item: string;

  constructor(item: string) {
    MinLengthVO.create(
      item,
      10,
      "Goal item must be at least 10 characters long."
    );

    this.item = item;
  }

  get properties() {
    return {
      item: this.item,
    };
  }
}
