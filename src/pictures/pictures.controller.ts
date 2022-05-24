import { PicturesService } from './pictures.service';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { ClassSerializerInterceptor, Controller, Get, Post, Delete, Req, UploadedFile, UseGuards, UseInterceptors, Param, StreamableFile, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { JwtAuthGuard } from 'src/users/auth/auth.guard';
import { Response } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';


@Controller('pictures')
@ApiTags('pictures')
@ApiBearerAuth('access-token')
export class PicturesController {
  constructor(
    private readonly picturesService: PicturesService,
  ) {}
 
   @Post()
   @ApiConsumes('multipart/form-data')
   @ApiBody({
    schema: {
      type: 'object',
      properties: {
        weddingId: { type: 'integer' },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(JwtAuthGuard) 
  @UseInterceptors(ClassSerializerInterceptor) 
    async addImg( @UploadedFile() file: Express.Multer.File, @Body() dto: CreatePictureDto) {
      return this.picturesService.addImg(  file.buffer, dto);
    }
  
  
    @Get(':id')
    @UseGuards(JwtAuthGuard) 
    @UseInterceptors(ClassSerializerInterceptor)
  async getFile(@Param('id') id: number, @Response({ passthrough: true }) res) {
    res.set({
      'Content-Type': 'image/jpeg',
      
    });
    
    return new StreamableFile(await this.picturesService.getImg(id));

  }

    @Delete(':id')
    @UseGuards(JwtAuthGuard) 
    @UseInterceptors(ClassSerializerInterceptor)
    remove(@Param('id') id: number) {
      return this.picturesService.remove(+id);
    }

  }



