import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
   
   let wedding= this.weddingRepository.findOne(id)

   if(!wedding) {
    throw new HttpException('Wedding not found', HttpStatus.NOT_FOUND);
  }
  return wedding
    
  }

  async update(id: number, body: UpdateWeddingDto) {
    let wedding= await this.weddingRepository.findOne(id)

    if(!wedding) {
     throw new HttpException('Wedding not found', HttpStatus.NOT_FOUND);
   }
   wedding.date=body.date,
   wedding.kind=body.kind
     
      return this.weddingRepository.save(wedding);
  
}

  async remove(id: number) {
    let wedding = await this.weddingRepository.findOne(id);
    if(!wedding) {
      throw new HttpException('Wedding not found', HttpStatus.NOT_FOUND);
    }
    this.weddingRepository.remove(wedding);
  }



}


