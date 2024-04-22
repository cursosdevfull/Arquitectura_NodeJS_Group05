import { IsNotEmpty, IsString } from 'class-validator';

export class CourseInsertDto {
  @IsNotEmpty()
  @IsString()
  title: string;
}
