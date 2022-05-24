import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Min, Max,Matches,Validate, IsString } from "class-validator";
import { CustomMatchPasswords } from "src/users/CustomMatchPasswords ";


export class RegisterDto {
    @ApiProperty({example:'martapej@gmail.com'})
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @ApiProperty({example:'silneHaslo1'})
    @IsNotEmpty()
    @Validate(CustomMatchPasswords, ['repassword'])
    password: string;

    @ApiProperty({example:'silneHaslo1'})
    @IsNotEmpty()
    repassword: string;

    @ApiProperty({example:'Marta'})
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @ApiProperty({example:'Pejkowska'})
    @IsNotEmpty()
    @IsString()
    lastName: string;
}
