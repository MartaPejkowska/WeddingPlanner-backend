 import { IsNotEmpty } from "class-validator";

export class CreatePictureDto {
   
    @IsNotEmpty()
    weddingId:number


}