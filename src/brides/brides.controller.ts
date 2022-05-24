import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, ClassSerializerInterceptor, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/users/auth/auth.guard';
import { BridesService } from './brides.service';
import { CreateBrideDto } from './dto/create-bride.dto';
import { UpdateBrideDto } from './dto/update-bride.dto';

@Controller('brides')
@ApiTags('brides')
export class BridesController {
  constructor(private readonly bridesService: BridesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  create(@Body() createBrideDto: CreateBrideDto) {
    return this.bridesService.create(createBrideDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('id') id: string) {
    return this.bridesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  update(@Param('id') id: string, @Body() updateBrideDto: UpdateBrideDto,@Req() req: Request) {
    return this.bridesService.update(+id, updateBrideDto,req);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  remove(@Param('id') id: string) {
    return this.bridesService.remove(+id);
  }
}
