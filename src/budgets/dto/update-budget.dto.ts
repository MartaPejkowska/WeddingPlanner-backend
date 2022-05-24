import { PartialType } from '@nestjs/mapped-types';
import { CreateBudgetDto } from './create-budget.dto';
import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBudgetDto extends PartialType(CreateBudgetDto) {
    @ApiProperty({example:50000})
    @IsNumber()
    budget: number;
    
    @ApiProperty({example:2500})
    @IsNumber()
    costs: number;

    @ApiProperty({example:'suknia'})
    @IsString()
    name: string;
}
