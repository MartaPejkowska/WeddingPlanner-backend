import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreateGuestDto {
    @ApiProperty()
    @IsNotEmpty()
    weddingId: number;
    @IsNotEmpty()
    name: string;
    @IsOptional()
    @IsEmail()
    email:string;

}
