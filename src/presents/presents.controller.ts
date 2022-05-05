import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PresentsService } from './presents.service';
import { CreatePresentDto } from './dto/create-present.dto';
import { UpdatePresentDto } from './dto/update-present.dto';

@Controller('presents')
export class PresentsController {
  constructor(private readonly presentsService: PresentsService) {}

  @Post()
  create(@Body() createPresentDto: CreatePresentDto) {
    return this.presentsService.create(createPresentDto);
  }

  @Get()
  findAll() {
    return this.presentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.presentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePresentDto: UpdatePresentDto) {
    return this.presentsService.update(+id, updatePresentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.presentsService.remove(+id);
  }
}
