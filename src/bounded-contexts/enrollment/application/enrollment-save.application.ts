import { inject, injectable } from "inversify";

import { EnrollmentRepository } from "../domain/repositories/enrollment.repository";
import { Enrollment } from "../domain/roots/enrollment";

@injectable()
export class EnrollmentSaveApplication {
  constructor(
    @inject("EnrollmentRepository")
    private readonly repository: EnrollmentRepository
  ) {}

  execute(enrollment: Enrollment): Enrollment {
    return this.repository.save(enrollment);
  }
}
