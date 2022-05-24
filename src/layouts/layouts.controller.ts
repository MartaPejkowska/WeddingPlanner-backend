import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LayoutsService } from './layouts.service';
import { CreateLayoutDto } from './dto/create-layout.dto';
import { UpdateLayoutDto } from './dto/update-layout.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('layouts')
@ApiTags('layouts')
export class LayoutsController {
  constructor(private readonly layoutsService: LayoutsService) {}

  @Post()
  create(@Body() createLayoutDto: CreateLayoutDto) {
    return this.layoutsService.create(createLayoutDto);
  }

  @Get()
  findAll() {
    return this.layoutsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.layoutsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLayoutDto: UpdateLayoutDto) {
    return this.layoutsService.update(+id, updateLayoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.layoutsService.remove(+id);
  }
}
