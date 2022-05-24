import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreateGuestDto {
    @ApiProperty({example:1})
    @IsNotEmpty()
    weddingId: number;


    @IsNotEmpty()
    name: string;

    @ApiProperty({example:'zuziakowalska@gmail.com'}) 
    @IsOptional()
    @IsEmail()
    email:string;

}
