import { ApiProperty } from "@nestjs/swagger";
import {  IsNotEmpty } from "class-validator";

export class CreateCalendarDto {
    @ApiProperty({example:1})
 @IsNotEmpty()
    weddingId:number

}