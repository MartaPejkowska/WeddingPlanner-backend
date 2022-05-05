import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroomsService } from './grooms.service';
import { CreateGroomDto } from './dto/create-groom.dto';
import { UpdateGroomDto } from './dto/update-groom.dto';

@Controller('grooms')
export class GroomsController {
  constructor(private readonly groomsService: GroomsService) {}

  @Post()
  create(@Body() createGroomDto: CreateGroomDto) {
    return this.groomsService.create(createGroomDto);
  }

  @Get()
  findAll() {
    return this.groomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groomsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroomDto: UpdateGroomDto) {
    return this.groomsService.update(+id, updateGroomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groomsService.remove(+id);
  }
}
