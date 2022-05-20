import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWeddingDto } from './dto/create-wedding.dto';
import { UpdateWeddingDto } from './dto/update-wedding.dto';
import { Repository } from 'typeorm';
import { Wedding } from './entities/wedding.entity';

@Injectable()
export class WeddingsService {

  @InjectRepository(Wedding) private weddingRepository: Repository<Wedding>;

  create(body: CreateWeddingDto) {
    let wedding= new Wedding()

    wedding.date=body.date,
    wedding.kind=body.kind


    return this.weddingRepository.save(wedding);
  }
      
  

  findAll() {
    return this.weddingRepository.find();
  }

  findOne(id: number) {
    
    return this.weddingRepository.createQueryBuilder("Wedding")
    .where("Wedding.id = " + id)
    .getOne()
    
  }

  update(id: number, body: UpdateWeddingDto) {
    return this.weddingRepository.findOne({
      id:id
    }).then(Wedding => {
     
      return this.weddingRepository.save(Wedding);
  })
}

  async remove(id: number) {
    let Wedding = await this.weddingRepository.findOne(id);
    this.weddingRepository.remove(Wedding);
  }



}


