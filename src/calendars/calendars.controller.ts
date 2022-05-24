import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/users/auth/auth.guard';
import { CalendarsService } from './calendars.service';
import { CreateCalendarDto } from './dto/create-calendar.dto';


@Controller('calendars')
@ApiTags('calendars')
@ApiBearerAuth('access-token')
export class CalendarsController {
  constructor(private readonly calendarsService: CalendarsService) {}

  @Post()
  @UseGuards(JwtAuthGuard) 
  @UseInterceptors(ClassSerializerInterceptor) 
  create(@Body() createCalendarDto: CreateCalendarDto) {
    return this.calendarsService.create(createCalendarDto);
  }

 
  @Get(':id')
  @UseGuards(JwtAuthGuard) 
  @UseInterceptors(ClassSerializerInterceptor) 
  findOne(@Param('id') id: string) {
    return this.calendarsService.findOne(+id);
  }

}
