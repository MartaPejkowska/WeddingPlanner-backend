import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsNotEmpty, Min, Max,Matches,Validate, IsString } from "class-validator";
import { CustomMatchPasswords } from "src/users/CustomMatchPasswords ";
export class UpdateUserDto extends PartialType(CreateUserDto) {

    @IsEmail()
    email: string;
    @Validate(CustomMatchPasswords, ['repassword'])
    @IsString()
    password: string;
    @IsString()
    repassword: string;
}
