import { Injectable, StreamableFile } from '@nestjs/common';
import { CreatePictureDto } from './dto/create-picture.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Picture} from './entities/picture.entity';
import { Wedding } from 'src/weddings/entities/wedding.entity';
const bytea = require('postgres-bytea')
 
@Injectable()
export class PicturesService {
    @InjectRepository(Picture) private picturesRepository: Repository<Picture>;
    @InjectRepository(Wedding)  weddingRepository: Repository<Wedding>
  
 
  async addImg( imageBuffer: Buffer, dto:CreatePictureDto) {
    const picture= new Picture()
    picture.img= imageBuffer
    let wedding= await this.weddingRepository.findOne({id: dto.weddingId})
    picture.wedding=wedding

    return this.picturesRepository.save(picture)
  }


  async findAll() {
    const img= await this.picturesRepository.find()
    return img ;
  }
 
  async getImg(id: number){
    const img= await this.picturesRepository.createQueryBuilder("picture")
    .where("picture.id = " + id)
    .getOne()

    return img.img;
  }

  async remove(id: number) {
    let picture = await this.picturesRepository.findOne(id);
    this.picturesRepository.remove(picture);
  }
 
}
