import { PartialType } from '@nestjs/mapped-types';
import { CreatePresentDto } from './create-present.dto';

export class UpdatePresentDto extends PartialType(CreatePresentDto) {}
