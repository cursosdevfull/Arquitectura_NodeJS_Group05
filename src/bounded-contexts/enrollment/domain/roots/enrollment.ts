import { Payment } from '@enrollment/entities';

export interface EnrollmentEssentials {
  studentId: string;
  scheduleId: string;
  enrollmentDate: Date;
}

export interface EnrollmentOptionals {
  payments: Payment[];
}

export type EnrollmentProps = EnrollmentEssentials &
  Partial<EnrollmentOptionals>;

export class Enrollment {
  private readonly studentId: string;
  private readonly scheduleId: string;
  private readonly enrollmentDate: Date;
  private payments: Payment[] | undefined;

  constructor(props: EnrollmentProps) {
    Object.assign(this, props);
  }

  get properties() {
    return {
      studentId: this.studentId,
      scheduleId: this.scheduleId,
      enrollmentDate: this.enrollmentDate,
      payments: this.payments,
    };
  }
}
