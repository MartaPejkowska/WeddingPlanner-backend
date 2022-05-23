import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Calendar } from './entities/calendar.entity';
import { Wedding } from 'src/weddings/entities/wedding.entity';


@Injectable()
export class CalendarsService {
  @InjectRepository(Calendar) private repository: Repository<Calendar>;
  @InjectRepository(Wedding)  weddingRepository: Repository<Wedding>;
 async create(body: CreateCalendarDto) {
    let calendar=new Calendar()
    let wedding= await this.weddingRepository.findOne({ id: body.weddingId })
    calendar.wedding=wedding

    if(!wedding ) {
      throw new HttpException('Wedding not found', HttpStatus.NOT_FOUND);
    }
   
    return this.repository.save(
      this.repository.create({
        ...calendar, wedding
      }),
    )
  }


  findOne(id: number) {
    
    let calendar= this.repository.findOne(id)

    if(!calendar) {
      throw new HttpException('Calendar not found', HttpStatus.NOT_FOUND);
    }

    return calendar
    
  }
}
