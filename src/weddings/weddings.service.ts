import { InjectRepository } from '@nestjs/typeorm';
import { Bride } from 'src/brides/entities/bride.entity';
import { Repository } from 'typeorm';
import { CreateWeddingDto } from './dto/create-wedding.dto';
import { UpdateWeddingDto } from './dto/update-wedding.dto';
import { HttpException, HttpStatus, Injectable, StreamableFile } from '@nestjs/common';
import { Wedding } from './entities/wedding.entity';
import { Picture } from 'src/pictures/entities/picture.entity';

class imgIdObject {
  picture_id: number
}

@Injectable()
export class WeddingsService {
  @InjectRepository(Wedding)
  private readonly weddingRepository: Repository<Wedding>;

  @InjectRepository(Picture)
  private readonly pictureRepository: Repository<Picture>;

  create(body: CreateWeddingDto) {
    let wedding= new Wedding()

    wedding.date=body.date,
    wedding.kind=body.kind

    return this.weddingRepository.save(wedding);
  }
      

  async findOne(id: number) {
   
   let wedding= await this.weddingRepository.findOne(id)

   if(!wedding) {
    throw new HttpException('Wedding not found', HttpStatus.NOT_FOUND);
  }

   let ids:imgIdObject[] = await this.pictureRepository.createQueryBuilder("picture")
   .select("picture.id").where("picture.weddingId="+id).execute();
   let mapped = ids.map(id => {
      return id.picture_id;  
  })

  return {...wedding,images:mapped};
    
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
