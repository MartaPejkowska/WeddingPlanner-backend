import { PartialType } from '@nestjs/mapped-types';
import { CreateTableDto } from './create-table.dto';
import { IsEnum, IsNumber } from "class-validator";
import { TablesKind } from "../entities/table.entity";

export class UpdateTableDto extends PartialType(CreateTableDto) {

@IsEnum({TablesKind})
kind: TablesKind

@IsNumber()
amountOfTables:number;

@IsNumber()
seats:number

}