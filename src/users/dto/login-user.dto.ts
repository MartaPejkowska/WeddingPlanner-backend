import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({example:'martapej@gmail.com'})
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({example:'silneHaslo1'})
  @IsNotEmpty()
  readonly password: string;
}