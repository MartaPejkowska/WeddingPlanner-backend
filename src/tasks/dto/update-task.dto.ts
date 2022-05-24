import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsDate,IsNotEmpty, MinDate } from "class-validator";
import { Type } from "class-transformer";
import { Column } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    @ApiProperty({example:'Próbna fryzura'})
    @IsNotEmpty()
    title: string; 
    
    @Column({type: 'datetime' })
    @MinDate( new Date())
    @Type(() => Date)
    @IsDate()
    date: Date ;
}
