import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

      let calendar= await this.repositoryCalendar.findOne({ id: body.CalendarId })

      if(!calendar) {
        throw new HttpException('Calendar not found', HttpStatus.NOT_FOUND);
      }

      return this.repository.save(
        this.repository.create({
          ...task,
          calendar,
        }),
      )
  }


  findOne(id: number) {
    let task= this.repository.findOne(id)

    if(!task) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    return task;    
    
  }

  async update(id: number, body: UpdateTaskDto) {
    let task= await this.repository.findOne(id)

    if(!task) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

      task.title=body.title
      task.date=body.date  
      
      return this.repository.save(task);
 
}

  async remove(id: number) {
    let task = await this.repository.findOne(id);
    this.repository.remove(task);
  }
}
