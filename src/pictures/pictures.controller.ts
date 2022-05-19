import { PicturesService } from './pictures.service';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { Controller, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { Wedding } from 'src/weddings/entities/wedding.entity';
import { diskStorage } from 'multer';
import path = require('path');
import { v4 as uuidv4 } from 'uuid';
import { multerOptions } from '../config/multerOptions.config';

// export const storage = {
//   storage: diskStorage({
//       destination: './uploads/profileimages',
//       filename: (req, file, cb) => {
//           const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
//           const extension: string = path.parse(file.originalname).ext;

//           cb(null, `${filename}${extension}`)
//       }
//   })

// } 


@Controller('pictures')
export class PicturesController {
  constructor(
    private readonly picturesService: PicturesService,
  ) {}
 
  

  @Post('img')
  @UseInterceptors(FileInterceptor('file'))
  


  // async addPicture(@Req() request: RequestWithUser, @UploadedFile() file: Express.Multer.File) {
  //   return this.picturesService.addPicture(request.user.id, {
  //     path: file.path,
  //     filename: file.originalname,
  //     mimetype: file.mimetype
  //   });
  
    async addImg(@UploadedFile() file: Express.Multer.File) {
      return this.picturesService.addImg( file.buffer, file.originalname);
    }
  }


// @Controller('pictures')
// export class PicturesController {
//   constructor(private readonly picturesService: PicturesService) {}

//   @Post()
//   create(@Body() createPictureDto: CreatePictureDto) {
//     return this.picturesService.create(createPictureDto);
//   }

//   @Get()
//   findAll() {
//     return this.picturesService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.picturesService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updatePictureDto: UpdatePictureDto) {
//     return this.picturesService.update(+id, updatePictureDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.picturesService.remove(+id);
//   }
// }


