import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ClassSerializerInterceptor, UseInterceptors, StreamableFile, Response } from '@nestjs/common';
import { WeddingsService } from './weddings.service';
import { CreateWeddingDto } from './dto/create-wedding.dto';
import { UpdateWeddingDto } from './dto/update-wedding.dto';
import { JwtAuthGuard } from 'src/users/auth/auth.guard';

@Controller('weddings')
export class WeddingsController {
  constructor(private readonly weddingsService: WeddingsService) {}

  @Post()
  @UseGuards(JwtAuthGuard) 
  @UseInterceptors(ClassSerializerInterceptor) 
  create(@Body() createWeddingDto: CreateWeddingDto) {
    return this.weddingsService.create(createWeddingDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard) 
  @UseInterceptors(ClassSerializerInterceptor) 
  findOne(@Param('id') id: string) {
    return this.weddingsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard) 
  @UseInterceptors(ClassSerializerInterceptor) 
  update(@Param('id') id: string, @Body() updateWeddingDto: UpdateWeddingDto) {
    return this.weddingsService.update(+id, updateWeddingDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard) 
  @UseInterceptors(ClassSerializerInterceptor) 
  remove(@Param('id') id: string) {
    return this.weddingsService.remove(+id);
  }
}
