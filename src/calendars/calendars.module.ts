import { Module } from '@nestjs/common';
import { CalendarsService } from './calendars.service';
import { CalendarsController } from './calendars.controller';
import { Calendar } from './entities/calendar.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Calendar]) ],
  controllers: [CalendarsController],
  providers: [CalendarsService]
})
export class CalendarsModule {}
