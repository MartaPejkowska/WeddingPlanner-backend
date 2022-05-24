 import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreatePictureDto {
    @ApiProperty()
    @IsNotEmpty()
    weddingId:number


}