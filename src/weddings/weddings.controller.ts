import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WeddingsService } from './weddings.service';
import { CreateWeddingDto } from './dto/create-wedding.dto';
import { UpdateWeddingDto } from './dto/update-wedding.dto';

@Controller('weddings')
export class WeddingsController {
  constructor(private readonly weddingsService: WeddingsService) {}

  @Post()
  create(@Body() createWeddingDto: CreateWeddingDto) {
    return this.weddingsService.create(createWeddingDto);
  }

  @Get()
  findAll() {
    return this.weddingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weddingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWeddingDto: UpdateWeddingDto) {
    return this.weddingsService.update(+id, updateWeddingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weddingsService.remove(+id);
  }
}
