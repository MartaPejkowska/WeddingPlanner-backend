import { Injectable } from '@nestjs/common';
import { CreateGroomDto } from './dto/create-groom.dto';
import { UpdateGroomDto } from './dto/update-groom.dto';

@Injectable()
export class GroomsService {
  create(createGroomDto: CreateGroomDto) {
    return 'This action adds a new groom';
  }

  findAll() {
    return `This action returns all grooms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} groom`;
  }

  update(id: number, updateGroomDto: UpdateGroomDto) {
    return `This action updates a #${id} groom`;
  }

  remove(id: number) {
    return `This action removes a #${id} groom`;
  }
}
