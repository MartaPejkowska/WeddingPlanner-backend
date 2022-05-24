import { PartialType } from '@nestjs/mapped-types';
import { CreateTableDto } from './create-table.dto';
import { IsEnum, IsNumber, IsString } from "class-validator";
import { TablesKind } from "../entities/table.entity";
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTableDto extends PartialType(CreateTableDto) {
    @ApiProperty()
@IsEnum({TablesKind})
kind: TablesKind

@ApiProperty({example:9})
@IsNumber()
amountOfTables:number;

@ApiProperty({example:12})
@IsNumber()
seats:number;

@ApiProperty({example:['Babcia','Dziadek','Ola','Ania', 'Arek']})
@IsString({ each: true })
 users:string;
}