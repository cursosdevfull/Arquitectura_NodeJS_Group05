import { Course } from "@course/roots/course";

import { ICourseMemory } from "../course-memory";

export class CourseDto {
  static fromDomainToData(
    data: Course | Course[]
  ): ICourseMemory | ICourseMemory[] {
    if (Array.isArray(data)) {
      return data.map(
        (course) => this.fromDomainToData(course) as ICourseMemory
      );
    }

    return {
      courseId: data.properties.courseId,
      title: data.properties.title,
      slug: data.properties.slug,
      goals: data.properties.goals.map((goal) => goal.properties.item),
      requeriments: data.properties.requeriments.map(
        (requeriment) => requeriment.properties.item
      ),
      syllabus: data.properties.syllabus.map(
        (syllabus) => syllabus.properties.item
      ),
    };
  }
}
