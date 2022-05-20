import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, ClassSerializerInterceptor, Req } from '@nestjs/common';
import { GroomsService } from './grooms.service';
import { CreateGroomDto } from './dto/create-groom.dto';
import { UpdateGroomDto } from './dto/update-groom.dto';
import { JwtAuthGuard } from 'src/users/auth/auth.guard';
import { Request } from 'express';

@Controller('grooms')
export class GroomsController {
  constructor(private readonly groomsService: GroomsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  create(@Body() createGroomDto: CreateGroomDto) {
    return this.groomsService.create(createGroomDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('id') id: string) {
    return this.groomsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  update(@Param('id') id: string, @Body() updateGroomDto: UpdateGroomDto,@Req() req: Request) {
    return this.groomsService.update(+id, updateGroomDto,req);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  remove(@Param('id') id: string) {
    return this.groomsService.remove(+id);
  }
}
