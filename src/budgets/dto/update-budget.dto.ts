import { PartialType } from '@nestjs/mapped-types';
import { CreateBudgetDto } from './create-budget.dto';
import { IsNumber, IsString } from "class-validator";

export class UpdateBudgetDto extends PartialType(CreateBudgetDto) {
    @IsNumber()
    budget: number;
    
    @IsNumber()
    costs: number;

    @IsString()
    name: string;
}
