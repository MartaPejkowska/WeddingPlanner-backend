import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateGroomDto {

      
    @IsNumber()
    phone: number;

    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsNotEmpty()
    @IsNumber()
    weddingId: number;
}
