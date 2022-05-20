import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { CreateBrideDto } from './create-bride.dto';

export class UpdateBrideDto extends PartialType(CreateBrideDto) {

    @IsNumber()
    @IsOptional()
    phone: number;

    @IsArray()
    @IsOptional()
    clothes: string[];


}
