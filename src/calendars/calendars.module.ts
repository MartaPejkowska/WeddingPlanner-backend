import { Module } from '@nestjs/common';
import { CalendarsService } from './calendars.service';
import { CalendarsController } from './calendars.controller';
import { Calendar } from './entities/calendar.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wedding } from 'src/weddings/entities/wedding.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Calendar]),TypeOrmModule.forFeature([Wedding])  ],
  controllers: [CalendarsController],
  providers: [CalendarsService]
})
export class CalendarsModule {}
