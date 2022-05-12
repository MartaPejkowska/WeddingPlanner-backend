import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task } from './entities/task.entity';
import { Calendar } from 'src/calendars/entities/calendar.entity';

@Injectable()
export class TasksService {
  @InjectRepository(Task) private repository: Repository<Task>;
  @InjectRepository(Calendar) private repositoryCalendar: Repository<Calendar>;
 async create(body: CreateTaskDto) {
    let task=new Task()
     
      task.title=body.title,
      task.date=body.date
      return this.repository.save(
        this.repository.create({
          ...task,
          calendar: await this.repositoryCalendar.findOne({ id: body.CalendarId }),
        }),
      )
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    
    return this.repository.createQueryBuilder("task")
    .where("task.id = " + id)
    .getOne()
    
  }

  update(id: number, body: UpdateTaskDto) {
    return this.repository.findOne({
      id:id
    }).then(task => {
      task.title=body.title
      task.date=body.date  
      
      return this.repository.save(task);
  })
}

  async remove(id: number) {
    let task = await this.repository.findOne(id);
    this.repository.remove(task);
  }
}
