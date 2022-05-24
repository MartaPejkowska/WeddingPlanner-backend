import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { CreateBrideDto } from './create-bride.dto';

export class UpdateBrideDto extends PartialType(CreateBrideDto) {
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    phone: number;

    @IsArray()
    @IsOptional()
    clothes: string[];


}
