 import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreatePictureDto {
    @ApiProperty({example:1})
    @IsNotEmpty()
    weddingId:number


}