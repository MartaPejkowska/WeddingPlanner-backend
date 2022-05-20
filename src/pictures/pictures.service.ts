import { Injectable, StreamableFile } from '@nestjs/common';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Picture} from './entities/picture.entity';
import { Wedding } from 'src/weddings/entities/wedding.entity';
const bytea = require('postgres-bytea')
 
@Injectable()
export class PicturesService {
    @InjectRepository(Picture) private picturesRepository: Repository<Picture>;
    @InjectRepository(Wedding) private weddingRepository: Repository<Wedding>
  
 
  async addImg( imageBuffer: Buffer, filename: string) {
    const newPicture= new Picture()
    newPicture.img= imageBuffer
  

    this.picturesRepository.save(newPicture)
  }


 
//  async create( weddingId: number, imageBuffer: Buffer, filename: string) {
//     let newPicture=new Picture()
//     newPicture.img= imageBuffer
        
//       return this.picturesRepository.save(
//         this.picturesRepository.create({
//           ...newPicture,
//           wedding: await this.weddingRepository.findOne({ id: weddingId }),
//         }),
//       )
//   }

  // async findAll() {
  //   const img= await this.picturesRepository.find()
  //   return img ;
  // }
 
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
