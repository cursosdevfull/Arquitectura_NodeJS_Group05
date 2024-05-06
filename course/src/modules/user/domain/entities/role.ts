export class Role {
  readonly id: string;
  readonly name: string | undefined;

  constructor(id: string, name?: string) {
    this.id = id;
    if (name) this.name = name;
  }

  get properties() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
