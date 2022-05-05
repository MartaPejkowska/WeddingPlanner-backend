import { Injectable } from '@nestjs/common';
import { CreateBrideDto } from './dto/create-bride.dto';
import { UpdateBrideDto } from './dto/update-bride.dto';

@Injectable()
export class BridesService {
  create(createBrideDto: CreateBrideDto) {
    return 'This action adds a new bride';
  }

  findAll() {
    return `This action returns all brides`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bride`;
  }

  update(id: number, updateBrideDto: UpdateBrideDto) {
    return `This action updates a #${id} bride`;
  }

  remove(id: number) {
    return `This action removes a #${id} bride`;
  }
}
