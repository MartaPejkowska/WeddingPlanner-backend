import { PartialType } from '@nestjs/mapped-types';
import { CreateBrideDto } from './create-bride.dto';

export class UpdateBrideDto extends PartialType(CreateBrideDto) {}
