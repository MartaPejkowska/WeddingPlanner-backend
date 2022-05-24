import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { CreateBrideDto } from './create-bride.dto';

export class UpdateBrideDto extends PartialType(CreateBrideDto) {
    @ApiProperty({example: 728645725})
    @IsNumber()
    @IsOptional()
    phone: number;

    @ApiProperty({example: ['suknia', 'buty', 'buty na zmianę']})
    @IsArray()
    @IsOptional()
    clothes: string[];


}
