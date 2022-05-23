import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Calendar } from 'src/calendars/entities/calendar.entity';
import { Task } from './entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Task]),TypeOrmModule.forFeature([Calendar]) ],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
