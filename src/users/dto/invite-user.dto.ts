import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Guest } from "src/guests/entities/guest.entity";

export enum WeddingRole {
    BRIDE = "bride",
    GROOM = "groom",
    GUEST = "guest",
  }
export class InviteUserDto {
  @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsEnum(WeddingRole)
    weddingRole: WeddingRole;
}
