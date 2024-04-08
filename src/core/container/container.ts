import { Container } from "inversify";

import { CourseSaveApplication } from "../../bounded-contexts/course/application/course-save.application";
import { CourseInfrastructure } from "../../bounded-contexts/course/infrastructure/course.infrastructure";
import { EnrollmentSaveApplication } from "../../bounded-contexts/enrollment/application/enrollment-save.application";
import { EnrollmentInfrastructure } from "../../bounded-contexts/enrollment/infrastructure/enrollment.infrastructure";
import { ScheduleSaveApplication } from "../../bounded-contexts/schedule/application/schedule-save.application";
import { ScheduleInfrastructure } from "../../bounded-contexts/schedule/infrastructure/schedule.infrastructure";

const container = new Container();

container.bind("CourseRepository").to(CourseInfrastructure);
container.bind("EnrollmentRepository").to(EnrollmentInfrastructure);
container.bind("ScheduleRepository").to(ScheduleInfrastructure);

container.bind("CourseSaveApplication").to(CourseSaveApplication);
container.bind("EnrollmentSaveApplication").to(EnrollmentSaveApplication);
container.bind("ScheduleSaveApplication").to(ScheduleSaveApplication);

export { container };
