import { PartialType } from '@nestjs/mapped-types';
import { CreateGroomDto } from './create-groom.dto';

export class UpdateGroomDto extends PartialType(CreateGroomDto) {}
