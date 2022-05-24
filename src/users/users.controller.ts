import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, ClassSerializerInterceptor, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request } from 'express';
import { RegisterDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ActiveJwtAuthGuard, JwtAuthGuard} from './auth/auth.guard';
import { MailService } from 'src/mail/mail.service';
import { User } from './entities/user.entity';
import { ApiBasicAuth, ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
@ApiBearerAuth('access-token')
export class UsersController {
  constructor(private readonly usersService: UsersService,private mailService: MailService) {}


  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor) 
   update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto,@Req() req: Request) {
    return this.usersService.update(id,updateUserDto,req);
  }


  @Get('active')
  @UseGuards(ActiveJwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
   active(@Req() req: Request) {
    return this.usersService.updateActive(req);
  }

}
