import { CurrentDateVO, MinArrayVO, UuidVO } from '@value-objects';

import { Enrollment, EnrollmentProps } from './enrollment';

export class EnrollmentFactory {
  static create(props: EnrollmentProps): Enrollment {
    UuidVO.create(props.studentId, "Invalid studentId");
    UuidVO.create(props.scheduleId, "Invalid courseId");
    if (props.payments)
      MinArrayVO.create(
        props.payments,
        "Enrollment must have at least one payment"
      );

    CurrentDateVO.create(
      props.enrollmentDate,
      "Enrollment date must be in the past."
    );

    return new Enrollment(props);
  }
}
