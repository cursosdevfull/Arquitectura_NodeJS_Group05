import { injectable } from "inversify";

import { EnrollmentRepository } from "../domain/repositories/enrollment.repository";
import { Enrollment } from "../domain/roots/enrollment";

@injectable()
export class EnrollmentInfrastructure implements EnrollmentRepository {
  save(enrollment: Enrollment): Enrollment {
    return enrollment;
  }
}
