import { PartialType } from '@nestjs/mapped-types';
import { CreateBudgetDto } from './create-budget.dto';
import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBudgetDto extends PartialType(CreateBudgetDto) {
    @ApiProperty()
    @IsNumber()
    budget: number;
    
    @IsNumber()
    costs: number;

    @IsString()
    name: string;
}
