import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsDate, IsEmail, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { GuestRole } from '../entities/guest.entity';
import { CreateGuestDto } from './create-guest.dto';

export class UpdateGuestDto extends PartialType(CreateGuestDto) {
    @ApiProperty()
    @IsOptional()
    name: string;

    @IsBoolean()
    @IsOptional()
    plusOne: boolean;

    @IsNumber()
    @IsOptional()
    userId: number;

    @IsEmail()
    @IsOptional()
    email: string;

    @IsBoolean()
    @IsOptional()
    accepted: boolean;

    @Type(() => Date)
    @IsDate()
    @IsOptional()
    arrival: Date;

    @IsArray()
    @IsOptional()
    presents: string[];

    @IsEnum(GuestRole)
    @IsOptional()
    role: GuestRole;
}
