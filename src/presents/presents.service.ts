import { Injectable } from '@nestjs/common';
import { CreatePresentDto } from './dto/create-present.dto';
import { UpdatePresentDto } from './dto/update-present.dto';

@Injectable()
export class PresentsService {
  create(createPresentDto: CreatePresentDto) {
    return 'This action adds a new present';
  }

  findAll() {
    return `This action returns all presents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} present`;
  }

  update(id: number, updatePresentDto: UpdatePresentDto) {
    return `This action updates a #${id} present`;
  }

  remove(id: number) {
    return `This action removes a #${id} present`;
  }
}
