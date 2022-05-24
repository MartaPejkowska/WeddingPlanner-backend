import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateGroomDto {

    @ApiProperty({example:722785945})  
    @IsNumber()
    phone: number;

    @ApiProperty({example:1}) 
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @ApiProperty({example:1}) 
    @IsNotEmpty()
    @IsNumber()
    weddingId: number;
}
