import { IsEnum, IsNumber } from "class-validator";
import { TablesKind } from "../entities/table.entity";

export class CreateTableDto {

@IsEnum(TablesKind)
kind: TablesKind

@IsNumber()
amountOfTables:number;

@IsNumber()
seats:number

@IsNumber()
    UserId:number

}
