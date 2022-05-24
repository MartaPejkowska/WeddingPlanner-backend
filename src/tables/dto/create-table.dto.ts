import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsString, MaxLength, IsNotEmpty } from "class-validator";
import { TablesKind } from "../entities/table.entity";


export class CreateTableDto {

  @ApiProperty()
@IsEnum(TablesKind)
kind: TablesKind;

@ApiProperty({example:10})
amountOfTables:number;

@ApiProperty({example:10})
@IsNumber()
seats:number;

@ApiProperty({example:['Babcia','Dziadek','Ola','Ania']})
@IsString({ each: true })
 users:string;

 @ApiProperty({example:1})
 @IsNotEmpty()
    weddingId:number

}
