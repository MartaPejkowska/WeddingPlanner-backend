import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsOptional } from 'class-validator';
import { CreateGroomDto } from './create-groom.dto';

export class UpdateGroomDto extends PartialType(CreateGroomDto) {
    @ApiProperty({example: 665748958})
    @IsNumber()
    @IsOptional()
    phone: number;

    @ApiProperty({example: ['garnitur', 'koszula']})
    @IsArray()
    @IsOptional()
    clothes: string[];
}
