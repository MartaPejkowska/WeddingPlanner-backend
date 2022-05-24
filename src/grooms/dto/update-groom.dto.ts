import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsOptional } from 'class-validator';
import { CreateGroomDto } from './create-groom.dto';

export class UpdateGroomDto extends PartialType(CreateGroomDto) {
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    phone: number;

    @IsArray()
    @IsOptional()
    clothes: string[];
}
