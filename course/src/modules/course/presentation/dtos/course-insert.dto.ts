import { IsNotEmpty, IsString } from 'class-validator';

export class CourseInsertDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
