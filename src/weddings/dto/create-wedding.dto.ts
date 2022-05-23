import { IsDate,IsNotEmpty, MinDate } from "class-validator";
import { Type } from "class-transformer";
import { Column } from "typeorm";
import { weddingTypes } from "../entities/wedding.entity";

export class CreateWeddingDto {

@Column({type: 'datetime' })
@MinDate( new Date())
@Type(() => Date)
@IsDate()
date: Date ;

@IsNotEmpty()
kind:weddingTypes;
}