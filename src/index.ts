import "reflect-metadata";

import { CourseProps } from "@course/roots/course";

import { CourseSaveApplication } from "./bounded-contexts/course/application/course-save.application";
import { Goal } from "./bounded-contexts/course/domain/entities/goal";
import { Requeriment } from "./bounded-contexts/course/domain/entities/requeriment";
import { Syllabus } from "./bounded-contexts/course/domain/entities/syllabus";
import { container } from "./core/container/container";

const application = container.get<CourseSaveApplication>(
  "CourseSaveApplication"
);
const props: CourseProps = {
  courseId: "6dee02b4-9ea1-4e29-86c6-45f0dbe98b49",
  title: "Course New Infrastructure as Code",
  slug: "course-new-infrastructure-as-code",
  goals: [new Goal("Goal Item 1")],
  requeriments: [new Requeriment("Requeriment Item 1")],
  syllabus: [new Syllabus("Syllabus Item 1")],
};

const course = application.execute(props);
console.log(course);
