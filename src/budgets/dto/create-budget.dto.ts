import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBudgetDto {
    @IsNumber()
    budget: number;
    
    @IsNumber()
    costs: number;

    @IsString()
    name: string;

    @IsNotEmpty()
    weddingId:number

}
