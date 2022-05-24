import { PartialType } from '@nestjs/mapped-types';
import { CreateWeddingDto } from './create-wedding.dto';
import { IsDate,IsNotEmpty, MinDate } from "class-validator";
import { Type } from "class-transformer";
import { Column } from "typeorm";
import { weddingTypes } from "../entities/wedding.entity";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateWeddingDto extends PartialType(CreateWeddingDto) {
    @ApiProperty()
@Column({type: 'datetime' })
@MinDate( new Date())
@Type(() => Date)
@IsDate()
date: Date ;

@IsNotEmpty()
kind:weddingTypes;
}
