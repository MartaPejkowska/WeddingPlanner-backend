import { Injectable } from '@nestjs/common';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Calendar } from './entities/calendar.entity';


@Injectable()
export class CalendarsService {
  @InjectRepository(Calendar) private repository: Repository<Calendar>;
  create(body: CreateCalendarDto) {
    let calendar=new Calendar()
   
      return this.repository.save(calendar);
  }

  async findAll() {
    return this.repository.find();
    
  }

  findOne(id: number) {
    
    return this.repository.createQueryBuilder("calendar")
    .where("calendar.id = " + id)
    .getOne()
    
  }


  async remove(id: number) {
    let calendar = await this.repository.findOne(id);
    this.repository.remove(calendar);
  }
}
