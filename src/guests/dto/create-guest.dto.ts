import { IsArray, IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreateGuestDto {

    @IsNotEmpty()
    weddingId: number;
    @IsNotEmpty()
    name: string;
    @IsOptional()
    @IsEmail()
    email:string;

}
