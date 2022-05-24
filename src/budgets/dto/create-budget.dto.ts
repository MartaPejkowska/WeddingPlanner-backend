import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBudgetDto {
    @ApiProperty()
    @IsNumber()
    budget: number;
    
    @IsNumber()
    costs: number;

    @IsString()
    name: string;

    @IsNotEmpty()
    weddingId:number

}
