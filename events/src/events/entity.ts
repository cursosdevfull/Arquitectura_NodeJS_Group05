import { v4 as uiidv4 } from "uuid";

export class Entity {
  protected _id: string;

  constructor(id?: string) {
    this._id = id || uiidv4();
  }
}
