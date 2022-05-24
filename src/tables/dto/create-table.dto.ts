import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsString, MaxLength, IsNotEmpty } from "class-validator";
import { TablesKind } from "../entities/table.entity";


export class CreateTableDto {

  @ApiProperty()
@IsEnum(TablesKind)
kind: TablesKind;

@IsNumber()
amountOfTables:number;

@IsNumber()
seats:number;

@IsString({ each: true })

 users:string;

 @IsNotEmpty()
    weddingId:number

}
