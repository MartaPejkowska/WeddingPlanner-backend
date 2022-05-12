import { IsDate,IsNotEmpty, MinDate } from "class-validator";
import { Type } from "class-transformer";
import { Column } from "typeorm";

export class CreateTaskDto {
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
