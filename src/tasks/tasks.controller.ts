import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from 'src/users/auth/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
 

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @UseGuards(JwtAuthGuard) 
  @UseInterceptors(ClassSerializerInterceptor) 
  @ApiBearerAuth()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard) 
  @UseInterceptors(ClassSerializerInterceptor) 
  findOne(@Param('id') id: number) {
    return this.tasksService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard) 
  @UseInterceptors(ClassSerializerInterceptor) 
  update(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard) 
  @UseInterceptors(ClassSerializerInterceptor) 
  remove(@Param('id') id: number) {
    return this.tasksService.remove(+id);
  }
}
