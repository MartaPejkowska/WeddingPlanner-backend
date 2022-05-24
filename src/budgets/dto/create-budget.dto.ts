import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBudgetDto {
    @ApiProperty({example:40000})
    @IsNumber()
    budget: number;
    
    @ApiProperty({example:2000})
    @IsNumber()
    costs: number;

    @ApiProperty({example:'suknia'})
    @IsString()
    name: string;

    @ApiProperty({example:1})
    @IsNotEmpty()
    weddingId:number

}
