import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bride } from 'src/brides/entities/bride.entity';
import { Repository } from 'typeorm';
import { CreateWeddingDto } from './dto/create-wedding.dto';
import { UpdateWeddingDto } from './dto/update-wedding.dto';
import { Wedding } from './entities/wedding.entity';

@Injectable()
export class WeddingsService {
  @InjectRepository(Wedding)
  private readonly weddingRepository: Repository<Wedding>;

  create(createWeddingDto: CreateWeddingDto) {
    return this.weddingRepository.save(new Wedding());
  }

  findAll() {
    return `This action returns all weddings`;
  }

  findOne(id: number) {
    return this.weddingRepository.findOne({id});
  }

  update(id: number, updateWeddingDto: UpdateWeddingDto) {
    return `This action updates a #${id} wedding`;
  }

  remove(id: number) {
    return `This action removes a #${id} wedding`;
  }
}
