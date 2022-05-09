import { IsEmail, IsNotEmpty, Min, Max,Matches,Validate } from "class-validator";
import { CustomMatchPasswords } from "src/users/CustomMatchPasswords ";


export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @Validate(CustomMatchPasswords, ['repassword'])
    password: string;
    @IsNotEmpty()
    repassword: string;
}
