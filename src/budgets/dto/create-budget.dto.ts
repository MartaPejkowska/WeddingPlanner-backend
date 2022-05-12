import { IsNumber, IsString } from "class-validator";

export class CreateBudgetDto {
    @IsNumber()
    budget: number;
    
    @IsNumber()
    costs: number;

    @IsString()
    name: string;

}
