import { injectable } from "inversify";

export interface ICourseMemory {
  courseId: string;
  title: string;
  slug: string;
  goals: string[];
  requeriments: string[];
  syllabus: string[];
}

@injectable()
export class CourseMemory {
  private courses: ICourseMemory[] = [];

  async save(course: ICourseMemory) {
    const indexFound = this.courses.findIndex(
      (course) => course.courseId === course.courseId
    );
    if (indexFound < 0) {
      this.courses.push(course);
    } else {
      this.courses[indexFound] = course;
    }
  }

  async getAll(): Promise<ICourseMemory[]> {
    return Promise.resolve([...this.courses]);
  }

  async getByCourseId(courseId: string): Promise<ICourseMemory> {
    return Promise.resolve(
      this.courses.find((course) => course.courseId === courseId)
    );
  }

  async getByPage(page: number, limit: number): Promise<ICourseMemory[]> {
    const start = (page - 1) * limit;
    const end = start + limit;
    return Promise.resolve([...this.courses.slice(start, end)]);
  }

  async findBySlug(slug: string): Promise<boolean> {
    const found = this.courses.find((course) => course.slug === slug);
    return Promise.resolve(found ? true : false);
  }
}
