import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Min, Max,Matches,Validate, IsString } from "class-validator";
import { CustomMatchPasswords } from "src/users/CustomMatchPasswords ";


export class RegisterDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    @Validate(CustomMatchPasswords, ['repassword'])
    password: string;

    @IsNotEmpty()
    repassword: string;

    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;
}
