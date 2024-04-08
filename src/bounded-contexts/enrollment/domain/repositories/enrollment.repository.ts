import { Enrollment } from "../roots/enrollment";

export interface EnrollmentRepository {
  save(enrollment: Enrollment): Enrollment;
}
