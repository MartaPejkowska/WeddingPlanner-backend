import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Min, Max,Matches,Validate, IsString } from "class-validator";
import { CustomMatchPasswords } from '../CustomMatchPasswords ';
import { RegisterDto } from './create-user.dto';
export class UpdateUserDto extends PartialType(RegisterDto) {
    @ApiProperty({example:'martapejk@gmail.com'})
    @IsEmail()
    email: string;

    @Validate(CustomMatchPasswords, ['repassword'])
    @ApiProperty({example:'silneHaslo2'})
    @IsString()
    password: string;
    @ApiProperty({example:'silneHaslo2'})
    @IsString()
    repassword: string;
}
