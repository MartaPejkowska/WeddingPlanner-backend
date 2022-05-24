import { PartialType } from '@nestjs/mapped-types';
import { CreateTableDto } from './create-table.dto';
import { IsEnum, IsNumber, IsString } from "class-validator";
import { TablesKind } from "../entities/table.entity";
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTableDto extends PartialType(CreateTableDto) {
    @ApiProperty()
@IsEnum({TablesKind})
kind: TablesKind

@IsNumber()
amountOfTables:number;

@IsNumber()
seats:number;

@IsString({ each: true })
 users:string;
}