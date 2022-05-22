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
 
   @Post()
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(JwtAuthGuard) 
  @UseInterceptors(ClassSerializerInterceptor) 
    async addImg( @UploadedFile() file: Express.Multer.File, @Body() dto: CreatePictureDto) {
      return this.picturesService.addImg(  file.buffer, dto);
    }
  
  
    @Get(':id')
  async getFile(@Param('id') id: number, @Response({ passthrough: true }) res) {
    res.set({
      'Content-Type': 'image/jpeg',
      
    });
    
    return new StreamableFile(await this.picturesService.getImg(id));

  }

    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.picturesService.remove(+id);
    }

  }



