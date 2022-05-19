import { Module } from '@nestjs/common';
import { PicturesService } from './pictures.service';
import { PicturesController } from './pictures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Picture } from './entities/picture.entity';
import {DatabaseFile} from './entities/databaseFile.entity';
import { Wedding } from 'src/weddings/entities/wedding.entity';
import DatabaseFilesService from './databaseFiles.service';

@Module({
  imports:[TypeOrmModule.forFeature([Picture]), TypeOrmModule.forFeature([DatabaseFile]), TypeOrmModule.forFeature([Wedding])],
  controllers: [PicturesController],
  providers: [PicturesService, DatabaseFilesService]
})
export class PicturesModule {}
