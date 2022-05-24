import { ApiProperty } from "@nestjs/swagger";
import {  IsNotEmpty } from "class-validator";

export class CreateCalendarDto {
    @ApiProperty()
 @IsNotEmpty()
    weddingId:number

}