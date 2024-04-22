import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'course' })
export class CourseEntity {
  @PrimaryColumn()
  courseId: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  title: string;

  @Column({ nullable: false, type: 'timestamp' })
  createdAt: Date;

  @Column({ nullable: true, type: 'timestamp' })
  updatedAt: Date;

  @Column({ nullable: true, type: 'timestamp' })
  deletedAt: Date;
}
