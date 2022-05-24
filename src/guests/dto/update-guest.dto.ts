import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsDate, IsEmail, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { Guest, GuestRole } from '../entities/guest.entity';
import { CreateGuestDto } from './create-guest.dto';

export class UpdateGuestDto extends PartialType(CreateGuestDto) {
    @ApiProperty({example:'Zosia'})
    @IsOptional()
    name: string;

    @ApiProperty({example:true}) 
    @IsBoolean()
    @IsOptional()
    plusOne: boolean;
    

    @ApiProperty({example:1}) 
    @IsNumber()
    @IsOptional()
    userId: number;

    @ApiProperty({example:'zosiakowal@gmail.com'}) 
    @IsEmail()
    @IsOptional()
    email: string;

    @ApiProperty({example:true}) 
    @IsBoolean()
    @IsOptional()
    accepted: boolean;
    
    @ApiProperty() 
    @Type(() => Date)
    @IsDate()
    @IsOptional()
    arrival: Date;

    @ApiProperty({example:['zastawa']}) 
    @IsArray()
    @IsOptional()
    presents: string[];

    @ApiProperty({example:Guest}) 
    @IsEnum(GuestRole)
    @IsOptional()
    role: GuestRole;
}
