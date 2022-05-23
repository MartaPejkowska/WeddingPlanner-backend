import {  IsNotEmpty } from "class-validator";

export class CreateCalendarDto {

 @IsNotEmpty()
    weddingId:number

}