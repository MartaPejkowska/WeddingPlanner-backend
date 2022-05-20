import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsNumber, IsOptional } from 'class-validator';
import { CreateGroomDto } from './create-groom.dto';

export class UpdateGroomDto extends PartialType(CreateGroomDto) {

    @IsNumber()
    @IsOptional()
    phone: number;

    @IsArray()
    @IsOptional()
    clothes: string[];
}
