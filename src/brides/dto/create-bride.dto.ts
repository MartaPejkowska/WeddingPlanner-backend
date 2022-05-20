import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateBrideDto {

    
    @IsNumber()
    phone: number;

    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsNotEmpty()
    @IsNumber()
    weddingId: number;
}
