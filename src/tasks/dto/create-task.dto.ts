import { IsDate,IsNotEmpty, MinDate } from "class-validator";
import { Type } from "class-transformer";
import { Column } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
    @ApiProperty()
    @IsNotEmpty()
    title: string; 
    
    @Column({type: 'datetime' })
    @MinDate( new Date())
    @Type(() => Date)
    @IsDate()
    date: Date ;

    @IsNotEmpty()
    CalendarId:number


}
