import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BridesService } from './brides.service';
import { CreateBrideDto } from './dto/create-bride.dto';
import { UpdateBrideDto } from './dto/update-bride.dto';

@Controller('brides')
export class BridesController {
  constructor(private readonly bridesService: BridesService) {}

  @Post()
  create(@Body() createBrideDto: CreateBrideDto) {
    return this.bridesService.create(createBrideDto);
  }

  @Get()
  findAll() {
    return this.bridesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bridesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrideDto: UpdateBrideDto) {
    return this.bridesService.update(+id, updateBrideDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bridesService.remove(+id);
  }
}
