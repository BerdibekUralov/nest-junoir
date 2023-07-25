import { ArrayNotEmpty, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Status } from "../task.interface";

export class createTaskDto{
  @IsString({ message: 'Название обязательно' })
  @IsNotEmpty({ message: 'Название обязательно' })
  task: string;

  @ArrayNotEmpty({ message: 'Необходимо указать теги' })
  @IsString({ each: true, message: 'Теги должны быть строчными' })
  tags?: string[];

  @IsOptional()
  @IsEnum(Status, { message: 'Не верный тип статуса' })
  status?: Status;
}