import { PicturesService } from './pictures.service';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { ClassSerializerInterceptor, Controller, Get, Post, Delete, Req, UploadedFile, UseGuards, UseInterceptors, Param, StreamableFile, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { JwtAuthGuard } from 'src/users/auth/auth.guard';
import { Response } from '@nestjs/common';


@Controller('pictures')
export class PicturesController {
  constructor(
    private readonly picturesService: PicturesService,
  ) {}
 
   @Post('img')

  // @Post('img/:weddingId')
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(JwtAuthGuard) 
  @UseInterceptors(ClassSerializerInterceptor) 
    async addImg( @UploadedFile() file: Express.Multer.File) {
      return this.picturesService.addImg( file.buffer, file.originalname);
    }

    
    // async create(@Param('weddingId') weddingId: number,  @UploadedFile() file: Express.Multer.File ) {
  
    //   return this.picturesService.create(+weddingId, file.buffer, file.originalname);
    // }


  // @Get('img')
  // async findAll(@Response({ passthrough: true }) res) {
  //   // return this.picturesService.findAll();
   
  //     res.set({
  //       'Content-Type': 'image/jpeg',
        
  //     });
      
  //     return new StreamableFile(await this.picturesService.findAll());
  // }



  @Get('img/:id')
  async getFile(@Param('id') id: number, @Response({ passthrough: true }) res) {
    res.set({
      'Content-Type': 'image/jpeg',
      
    });
    
    return new StreamableFile(await this.picturesService.getImg(id));

  }

    @Delete('img/:id')
    remove(@Param('id') id: number) {
      return this.picturesService.remove(+id);
    }

  }



