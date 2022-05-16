import { IsEnum, IsNumber, IsString, MaxLength } from "class-validator";
import { TablesKind } from "../entities/table.entity";


export class CreateTableDto {

@IsEnum(TablesKind)
kind: TablesKind;

@IsNumber()
amountOfTables:number;

@IsNumber()
seats:number;

@IsString({ each: true })

 users:string;

}
