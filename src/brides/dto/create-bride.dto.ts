import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateBrideDto {

    @ApiProperty({example: 665948827})
    @IsNumber()
    phone: number;

    @ApiProperty({example: 1})
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @ApiProperty({example: 1})
    @IsNotEmpty()
    @IsNumber()
    weddingId: number;
}
