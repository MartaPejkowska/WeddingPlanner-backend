import { PartialType } from '@nestjs/mapped-types';
import { CreateWeddingDto } from './create-wedding.dto';

export class UpdateWeddingDto extends PartialType(CreateWeddingDto) {}
