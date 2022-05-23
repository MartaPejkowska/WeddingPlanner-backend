import { HttpException, HttpStatus, Injectable, StreamableFile } from '@nestjs/common';
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

    if(!wedding ) {
      throw new HttpException('Wedding not found', HttpStatus.NOT_FOUND);
    }
    
    picture.wedding=wedding

    this.picturesRepository.save(picture)
  }

 
  async getImg(id: number){
    const img= await this.picturesRepository.findOne(id)

    if(!img){
      throw new HttpException('Picture not found', HttpStatus.NOT_FOUND);
    }

    return img.img;
  }

  async remove(id: number) {
    let picture = await this.picturesRepository.findOne(id);

    if(!picture){
      throw new HttpException('Picture not found', HttpStatus.NOT_FOUND);
    }

    this.picturesRepository.remove(picture);
  }
 
}
