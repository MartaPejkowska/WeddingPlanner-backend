import { IsDate,IsNotEmpty, MinDate } from "class-validator";
import { Type } from "class-transformer";
import { Column } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
    @ApiProperty({example:'Przymiarka sukni ślubnej'})
    @IsNotEmpty()
    title: string; 
    
    @Column({type: 'datetime' })
    @MinDate( new Date())
    @Type(() => Date)
    @IsDate()
    date: Date ;
    
    @ApiProperty({example:1})
    @IsNotEmpty()
    CalendarId:number


}
