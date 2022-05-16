import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, Min, Max,Matches,Validate, IsString } from "class-validator";
import { CustomMatchPasswords } from '../CustomMatchPasswords ';
import { RegisterDto } from './create-user.dto';
export class UpdateUserDto extends PartialType(RegisterDto) {

    @IsEmail()
    email: string;
    @Validate(CustomMatchPasswords, ['repassword'])
    @IsString()
    password: string;
    @IsString()
    repassword: string;
}
