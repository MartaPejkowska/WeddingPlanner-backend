import { Module } from '@nestjs/common';
import { PicturesService } from './pictures.service';
import { PicturesController } from './pictures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Picture } from './entities/picture.entity';
import { Wedding } from 'src/weddings/entities/wedding.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Picture, Wedding])],
  controllers: [PicturesController],
  providers: [PicturesService]
})
export class PicturesModule {}
