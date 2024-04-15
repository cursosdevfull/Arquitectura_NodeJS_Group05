export interface CourseProps {
  name: string;
}

export class Course {
  private name: string;

  constructor(props: CourseProps) {
    Object.assign(this, props);
  }

  get properties() {
    return {
      name: this.name,
    };
  }
}
